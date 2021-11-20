import { Service } from 'typedi';

@Service('AuthConfig')
class AuthConfig {
  secretToken: string;
  issuer: string;
  audience: string;

  constructor() {
    const nullableSecret = process.env.JWT_SECRET;
    const nullableIssuer = process.env.AUTH_ISSUER;
    const nullableAudience = process.env.AUTH_AUDIENCE;

    if (!nullableSecret) {
      throw new Error('JWT_SECRET not set');
      process.exit(1);
    }
    if (!nullableIssuer) {
      throw new Error('AUTH_ISSUER not set');
      process.exit(1);
    }
    if (!nullableAudience) {
      throw new Error('AUTH_AUDIENCE not set');
      process.exit(1);
    }
    this.secretToken = nullableSecret;
    this.audience = nullableAudience;
    this.issuer = nullableIssuer;
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
