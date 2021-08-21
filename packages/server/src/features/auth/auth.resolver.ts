import { Arg, Mutation, Resolver } from 'type-graphql';
import { AuthService, AuthPayload } from '@blog/server/features/auth';
import { Inject, Service } from 'typedi';

@Service()
@Resolver()
class AuthResolver {
  // constructor(private readonly authService: AuthService) {}
  @Inject('AuthService')
  private readonly authService: AuthService;

  @Mutation(() => AuthPayload, { nullable: true })
  async login(
    @Arg('code', { nullable: false }) code: string
  ): Promise<AuthPayload> {
    return await this.authService.login(code);
  }
}

export default AuthResolver;
