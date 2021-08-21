import { Service } from 'typedi';

@Service('AuthConfig')
class AuthConfig {
  secretToken: string;

  constructor() {
    const nullableSecret = process.env.JWT_SECRET;
    if (!nullableSecret) {
      throw new Error('JWT_SECRET not set');
      process.exit(1);
    }
    this.secretToken = nullableSecret;
  }
}

export enum RoleValues {
  User = 'USER',
  Admin = 'ADMIN',
}

export enum SocialProviders {
  Github = 'GITHUB',
}

export default AuthConfig;
