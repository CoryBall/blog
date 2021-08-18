import { UsersService } from '@blog/server/features/users';
import { AuthPayload } from '@blog/server/features/auth';
import { ApolloError } from 'apollo-server-express';
import { sign, verify } from 'jsonwebtoken';
import { Request } from 'express';
import LoggerService from '@blog/server/features/logger';
import { Inject, Service } from 'typedi';
import { AuthConfig } from '@blog/server/config';
import { PrismaClient, Role, User } from '@blog/prisma';

@Service()
class AuthService {
  @Inject()
  private readonly authConfig: AuthConfig;
  @Inject()
  private readonly usersService: UsersService;
  @Inject()
  private loggerService: LoggerService;

  prisma = new PrismaClient();

  async login(email: string, password: string): Promise<AuthPayload> {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new ApolloError('Invalid email or password');
    const role = await this.findRoleByUserId(user.id);
    if (!role) throw new ApolloError('User does not have a role');
    if (!user?.isDeleted) throw new ApolloError('account is inactive');
    // if (!user?.validatePassword(password))
    if (password === '') throw new ApolloError('Invalid email or password');
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
    };

    const accessToken: string = sign(
      { user: accessUser, role: accessRole },
      this.authConfig.secretToken,
      {
        expiresIn: '1y',
      }
    );

    return {
      bearer: accessToken,
    } as AuthPayload;
  }
}

export default AuthService;
