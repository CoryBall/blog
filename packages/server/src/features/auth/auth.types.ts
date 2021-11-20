import { Role, Social } from '@blog/prisma';
import { Field, ID, ObjectType } from 'type-graphql';

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

@ObjectType('Role')
class RoleModel implements Role {
  @Field(() => ID, { nullable: false })
  id: string;
  @Field()
  name: string;
}

@ObjectType('Social')
class SocialModel implements Social {
  @Field(() => ID, { nullable: false })
  id: string;
  @Field(() => ID, { nullable: false })
  userId: string;
  @Field()
  type: string;
  @Field()
  accountId: number;
  @Field()
  accountUrl: string;
  @Field()
  accountImage: string;
}

export { AuthPayload, GithubAuthResult, RoleModel, SocialModel };
