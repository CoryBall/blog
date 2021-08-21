import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class AuthPayload {
  @Field()
  bearer: string;
}

class GithubAuthResult {
  access_token: string;
  scope: string;
  token_type: string;
}

export { AuthPayload, GithubAuthResult };
