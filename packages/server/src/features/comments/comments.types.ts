import { Comment, Post, User } from '@blog/prisma';
import { ArgsType, Field, InputType, ObjectType } from 'type-graphql';
import { UserModel } from '@blog/server/features/users';
import { PostModel } from '@blog/server/features/posts';

@InputType()
class CreateCommentInput {
  @Field()
  body: string;
}

@ArgsType()
class NewCommentArgs {
  @Field()
  postId: string;
}

@ObjectType()
class CommentModel implements Comment {
  @Field()
  id: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
  @Field()
  isDeleted: boolean;
  @Field()
  body: string;
  @Field()
  authorId: string;
  @Field(() => UserModel)
  author: User;
  @Field()
  postId: string;
  @Field(() => PostModel)
  post: Post;
}

export { CreateCommentInput, CommentModel, NewCommentArgs };
