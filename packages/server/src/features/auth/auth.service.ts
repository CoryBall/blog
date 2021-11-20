import { UserService } from '@blog/server/features/users';
import { AuthPayload, GithubAuthResult } from '@blog/server/features/auth';
import { sign, verify, SignOptions } from 'jsonwebtoken';
import { Request } from 'express';
import LoggerService from '@blog/server/features/logger';
import { Inject, Service } from 'typedi';
import {
  AuthConfig,
  GithubConfig,
  RoleValues,
  SocialProviders,
} from '@blog/server/config';
import { PrismaClient, Role, User } from '@blog/prisma';
import { Octokit } from '@octokit/core';
import axios from 'axios';
import { ApolloError } from 'apollo-server-express';

@Service('AuthService')
class AuthService {
  @Inject('AuthConfig')
  private readonly authConfig: AuthConfig;
  @Inject('GithubConfig')
  private readonly githubConfig: GithubConfig;
  @Inject('UserService')
  private readonly userService: UserService;
  @Inject()
  private readonly loggerService: LoggerService;

  private readonly prisma = new PrismaClient();

  async login(code: string): Promise<AuthPayload> {
    let user: User;
    let role: Role;

    const tokenResult = await axios.post<GithubAuthResult>(
      'https://github.com/login/oauth/access_token',
      null,
      {
        params: {
          client_id: this.githubConfig.clientId,
          client_secret: this.githubConfig.clientSecret,
          redirect_uri: this.githubConfig.redirectUri,
          code,
        },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    const octokit = new Octokit({
      auth: tokenResult.data.access_token,
    });

    const { data: userData } = await octokit.request('GET /user');
    if (userData.email == null) {
      const emails = await octokit.request('GET /user/emails');
      if (emails.data.length !== 0) {
        userData.email = emails.data.find((x) => x.primary)?.email ?? null;
      }
    }

    const existingUserCheck = await this.prisma.social.count({
      where: { accountId: userData.id },
    });

    if (existingUserCheck === 0) {
      // create new user
      const roleCheck = await this.prisma.role.findUnique({
        where: { name: RoleValues.User },
      });
      if (!roleCheck)
        throw new ApolloError(
          `Could not assign you to role ${RoleValues.User}`
        );
      role = roleCheck;
      if (!userData.name || !userData.email)
        throw new ApolloError('Could not authenticate with GitHub');

      user = await this.userService.create(
        {
          name: userData.name,
          email: userData.email,
        },
        role
      );
      await this.prisma.social.create({
        data: {
          user: {
            connect: {
              id: user.id,
            },
          },
          accountId: userData.id,
          accountImage: userData.avatar_url,
          accountUrl: userData.html_url,
          type: SocialProviders.Github,
        },
      });
    } else {
      const profile = await this.prisma.social.findFirst({
        where: { accountId: userData.id, type: SocialProviders.Github },
        include: { user: true },
      });
      if (!profile?.user) throw new ApolloError('Could not retrieve user');
      if (profile.accountImage !== userData.avatar_url) {
        await this.prisma.social.update({
          where: { id: profile.id },
          data: {
            accountImage: userData.avatar_url,
          },
        });
        profile.accountImage = userData.avatar_url;
      }
      user = profile.user;
      const userRole = await this.prisma.role.findUnique({
        where: { id: user.roleId },
      });
      if (!userRole) throw new ApolloError('Could not retrieve user');
      role = userRole;
    }

    return this.signToken(user, role);
  }

  async findRoleByUserId(userId: string): Promise<Role | null> {
    return await this.prisma.user.findUnique({ where: { id: userId } }).role();
  }

  getTokenFromRequest(req: Request): string {
    return req.header('Authorization')?.split('Bearer ')[1] as string;
  }

  validateToken(token: string): { user: User; role: Role } | undefined {
    try {
      const payload = verify(token, this.authConfig.secretToken) as {
        user: User;
        role: Role;
      };
      if (payload?.user?.id) return payload;
    } catch (e) {
      this.loggerService.logger.error(e);
    }
    return;
  }

  signToken(user: User, role: Role): AuthPayload {
    const accessUser = {
      id: user.id,
    };
    const accessRole = {
      id: role.id,
      name: role.name,
    };

    const accessToken: string = sign(
      {
        user: accessUser,
        role: accessRole,
      },
      this.authConfig.secretToken,
      {
        expiresIn: '1y',
        issuer: this.authConfig.issuer,
        audience: this.authConfig.audience,
      } as SignOptions
    );

    return {
      bearer: accessToken,
    } as AuthPayload;
  }
}

export default AuthService;
