import { Post, User } from '@blog/prisma';
import { Field, InputType, ObjectType } from 'type-graphql';
import { UserModel } from '@blog/server/features/users';

@InputType()
class CreatePostInput {
  @Field()
  title: string;
  @Field()
  body: string;
}

@InputType()
class EditPostInput {
  @Field()
  title: string;
  @Field()
  body: string;
}

@ObjectType("Post")
class PostModel implements Post {
  @Field()
  id: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
  @Field()
  isDeleted: boolean;
  @Field()
  slug: string;
  @Field()
  title: string;
  @Field()
  body: string;
  @Field()
  published: boolean;
  @Field()
  views: number;
  viewsIps: string[];
  @Field()
  likes: number;
  likedIps: string[];
  @Field()
  authorId: string;
  @Field(() => UserModel)
  author: User;
}

@ObjectType()
class PostViews {
  @Field(() => [UserModel])
  users: UserModel[];
  @Field()
  views: number;
}

@ObjectType()
class PostLikes {
  @Field(() => [UserModel])
  users: UserModel[];
  @Field()
  likes: number;
}

export { CreatePostInput, EditPostInput, PostModel, PostViews, PostLikes };
