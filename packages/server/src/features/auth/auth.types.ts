import { Field, InputType, ObjectType } from 'type-graphql';

@InputType()
class Credentials {
  @Field({ nullable: false })
  email: string;
  @Field({ nullable: false })
  password: string;
}

@ObjectType()
class AuthPayload {
  @Field()
  bearer: string;
}

export { Credentials, AuthPayload };
