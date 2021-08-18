import { Arg, Mutation, Resolver } from 'type-graphql';
import { AuthService } from '@blog/server/features/auth';
import { AuthPayload, Credentials } from '@blog/server/features/auth';
import { Inject, Service } from 'typedi';

@Service()
@Resolver()
class AuthResolver {
  @Inject()
  private authService: AuthService;

  @Mutation(() => AuthPayload, { nullable: true })
  async login(
    @Arg('credentials', { nullable: false }) credentials: Credentials
  ): Promise<AuthPayload> {
    return await this.authService.login(
      credentials.email,
      credentials.password
    );
  }
}

export default AuthResolver;
