import { Role, Social, User } from '@blog/prisma';
import { RoleValues } from '@blog/server/config';
import { RoleModel } from '@blog/server/features/auth';
import { Authorized, Field, ID, ObjectType } from 'type-graphql';

class CreateUserInput {
  name: string;
  email: string;
}

@ObjectType("User")
class UserModel implements User {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field()
  @Authorized([RoleValues.Admin])
  isDeleted: boolean;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => ID, { nullable: false })
  roleId: string;

  @Field(() => RoleModel)
  role: Role;

  socials: Social[];

  @Field(() => String, { nullable: false })
  image(): string {
    return this.socials[0].accountProfileUrl;
  }
}

export { CreateUserInput, UserModel };
