import { Field, InputType, ObjectType } from 'type-graphql';
import { Tag, Post } from '@blog/prisma';
import { PostModel } from '@blog/server/features/posts';

@InputType()
class CreateTagInput {
  @Field()
  name: string;
}

@ObjectType('Tag')
class TagModel implements Tag {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field(() => [PostModel])
  posts: Post[];
}

export { CreateTagInput, TagModel };
