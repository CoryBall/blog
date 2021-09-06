import {
  Arg,
  Args,
  Authorized,
  Ctx,
  ID,
  Mutation,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
  ResolverFilterData,
  Root,
  Subscription,
  UnauthorizedError,
} from 'type-graphql';
import { Inject, Service } from 'typedi';
import { Comment } from '@blog/prisma';
import {
  CommentModel,
  CommentService,
  CreateCommentInput,
  NewCommentArgs,
} from '@blog/server/features/comments';
import { UserService } from '@blog/server/features/users';
import { ApolloError } from 'apollo-server-errors';

const newCommentTopic = 'NEW_COMMENT';

@Service()
@Resolver()
class CommentResolver {
  @Inject('CommentService')
  private readonly commentService: CommentService;
  @Inject('UserService')
  private readonly userService: UserService;

  @Query(() => [CommentModel])
  async allComments(
    @Arg('postId', () => ID, { nullable: false }) postId: string
  ): Promise<CommentModel[]> {
    return (await this.commentService.getByPost(postId)) as CommentModel[];
  }

  @Authorized()
  @Mutation(() => CommentModel)
  async createComment(
    @Ctx() { req }: DataContext,
    @PubSub() pubSub: PubSubEngine,
    @Arg('postId', () => ID, { nullable: false }) postId: string,
    @Arg('input', () => CreateCommentInput, { nullable: false })
    input: CreateCommentInput
  ): Promise<Comment> {
    if (!req?.user?.id) throw new UnauthorizedError();
    const comment = await this.commentService.create(
      input,
      postId,
      req.user.id
    );
    pubSub.publish(newCommentTopic, comment);
    return comment;
  }

  @Authorized()
  @Mutation(() => Boolean)
  async deleteComment(
    @Ctx() { req }: DataContext,
    @Arg('commentId', () => ID, { nullable: false }) commentId: string
  ): Promise<boolean> {
    if (!req?.user?.id) throw new UnauthorizedError();
    const user = await this.userService.findById(req.user.id);
    const comment = await this.commentService.find(commentId);
    if (!comment) throw new ApolloError('Coult not find Post');
    if (comment.authorId !== user?.id) throw new UnauthorizedError();

    try {
      await this.commentService.delete(commentId);
    } catch (error) {
      throw new ApolloError(error);
    }
    return true;
  }

  @Subscription(() => CommentModel, {
    topics: newCommentTopic,
    filter: ({
      payload,
      args,
    }: ResolverFilterData<CommentModel, NewCommentArgs>) => {
      return payload.postId === args.postId;
    },
  })
  newPostComments(
    @Root() comment: CommentModel,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Args(() => NewCommentArgs) _uploadArgs: NewCommentArgs
  ): CommentModel {
    return comment;
  }
}

export default CommentResolver;
