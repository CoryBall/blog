import { Service } from 'typedi';

@Service('GithubConfig')
class GithubConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;

  constructor() {
    const nullableId = process.env.GITHUB_CLIENT_ID;
    const nullableSecret = process.env.GITHUB_CLIENT_SECRET;
    const nullableRedirect = process.env.GITHUB_REDIRECT;
    if (!nullableId) {
      throw new Error('GITHUB_CLIENT_ID not set');
      process.exit(1);
    }
    if (!nullableSecret) {
      throw new Error('GITHUB_CLIENT_SECRET not set');
      process.exit(1);
    }
    if (!nullableRedirect) {
      throw new Error('GITHUB_REDIRECT not set');
      process.exit(1);
    }
    this.clientId = nullableId;
    this.clientSecret = nullableSecret;
    this.redirectUri = nullableRedirect;
  }
}

export default GithubConfig;
