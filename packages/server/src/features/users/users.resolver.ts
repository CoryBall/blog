import {
  Authorized,
  Ctx,
  Query,
  Resolver,
  UnauthorizedError,
} from 'type-graphql';
import { UserService } from '@blog/server/features/users';
import { ApolloError } from 'apollo-server-express';
import { Inject, Service } from 'typedi';
import { User } from '@blog/prisma';
import { UserModel } from '@blog/server/features/users';
import { AuthService } from '@blog/server/features/auth';

@Service()
@Resolver()
class UserResolver {
  @Inject('UserService')
  private readonly userService: UserService;
  @Inject('AuthService')
  private readonly authService: AuthService;

  @Authorized()
  @Query(() => UserModel, { nullable: false })
  async me(@Ctx() { req }: DataContext): Promise<User> {
    if (!req?.user?.id) throw new UnauthorizedError();
    const user = (await this.userService.findById(req?.user?.id)) as UserModel;
    if (!user) throw new ApolloError('Could not verify user. Please log in.');
    const role = await this.authService.findRoleByUserId(user.id);
    if (!!role) user.role = role;
    return user;
  }
}

export default UserResolver;
