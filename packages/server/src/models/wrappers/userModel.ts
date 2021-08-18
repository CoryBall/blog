import { Authorized, Field, ID, ObjectType } from 'type-graphql';
import { User, Role } from '@blog/prisma';
import { RoleValues } from '@blog/server/config';
import { RoleModel } from '@blog/server/models';

@ObjectType()
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
}

export default UserModel;
