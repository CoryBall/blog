import { Field, ID, ObjectType } from 'type-graphql';
import { Role } from '@blog/prisma';

@ObjectType()
class RoleModel implements Role {
  @Field(() => ID, { nullable: false })
  id: string;
  @Field()
  name: string;
}

export default RoleModel;
