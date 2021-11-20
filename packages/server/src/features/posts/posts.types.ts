import { Post, PostTags, Tag, User } from '@blog/prisma';
import { Field, InputType, ObjectType } from 'type-graphql';
import { UserModel } from '@blog/server/features/users';
import { TagModel } from '../tags';

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
  @Field(() => [String])
  tagIds: string[];
}

@ObjectType('Post')
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
  @Field(() => Date, { nullable: true })
  publishedAt: Date | null;
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
  tags: PostTagsModel[];
}

@ObjectType()
class PostTagsModel implements PostTags {
  @Field()
  tagId: string;
  @Field(() => TagModel)
  tag: Tag;
  @Field()
  postId: string;
  @Field(() => PostModel)
  post: Post;
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

export {
  CreatePostInput,
  EditPostInput,
  PostModel,
  PostViews,
  PostLikes,
  PostTagsModel,
};
