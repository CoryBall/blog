import {
  Arg,
  ID,
  PubSubEngine,
  PubSub,
  Query,
  Resolver,
  Root,
  Subscription,
  Mutation,
  Authorized,
  Ctx,
  UnauthorizedError,
  FieldResolver,
} from 'type-graphql';
import { Inject, Service } from 'typedi';
import { Post } from '@blog/prisma';
import {
  PostService,
  PostModel,
  PostViews,
  CreatePostInput,
  PostLikes,
  EditPostInput,
  PostTagsModel,
} from '@blog/server/features/posts';
import { UserModel, UserService } from '@blog/server/features/users';
import { ApolloError } from 'apollo-server-express';

const postViewTopic = 'POST_VIEW_UPDATE';
const postLikeTopic = 'POST_LIKE_UPDATE';

@Service()
@Resolver(() => PostModel)
class PostResolver {
  @Inject('PostService')
  private readonly postService: PostService;
  @Inject('UserService')
  private readonly userService: UserService;

  @FieldResolver(() => [String])
  tags(@Root() post: PostModel): string[] {
    return post.tags.map((x: PostTagsModel) => x.tag.name);
  }

  @Authorized()
  @Mutation(() => PostModel, { nullable: false })
  async createPost(
    @Ctx() { req }: DataContext,
    @Arg('input', () => CreatePostInput, { nullable: false })
    input: CreatePostInput
  ): Promise<Post> {
    if (!req?.user?.id) throw new UnauthorizedError();
    const user = (await this.userService.findById(req?.user?.id)) as UserModel;
    if (!user) throw new ApolloError('Could not verify user. Please log in.');
    return await this.postService.create(input, user.id);
  }

  @Query(() => [PostModel], { nullable: false })
  async allDrafts(@Ctx() { req }: DataContext): Promise<Post[]> {
    if (!req?.user?.id) throw new UnauthorizedError();
    return await this.postService.drafts(req.user.id);
  }

  @Authorized()
  @Mutation(() => PostModel, { nullable: false })
  async publishPost(
    @Ctx() { req }: DataContext,
    @Arg('postId', () => ID, { nullable: false }) postId: string
  ): Promise<Post> {
    const post = await this.postService.find(postId);
    if (post?.authorId !== req?.user?.id) throw new UnauthorizedError();
    return await this.postService.publish(postId);
  }

  @Query(() => [PostModel], { nullable: false })
  async allPosts(): Promise<Post[]> {
    return (await this.postService.all()) as PostModel[];
  }

  @Authorized()
  @Query(() => [PostModel], { nullable: false })
  async myPosts(@Ctx() { req }: DataContext): Promise<Post[]> {
    if (!req?.user?.id) throw new UnauthorizedError();
    return (await this.postService.userPosts(req.user.id)) as PostModel[];
  }

  @Query(() => PostModel, { nullable: true })
  async getPost(
    @Ctx() { req }: DataContext,
    @Arg('postId', () => ID, { nullable: true }) id: string,
    @Arg('slug', () => String, { nullable: true }) slug: string,
    @PubSub() pubSub: PubSubEngine
  ): Promise<Post | null> {
    if (!id && !slug)
      throw new ApolloError("Must specify either Post's ID or slug");
    const post = await this.postService.find(id);
    if (post) {
      const views = await this.postService.addView(post.id, req?.user?.id);
      await pubSub.publish(postViewTopic, views);
    }
    if (post?.authorId !== req?.user?.id && !post?.published) return null;
    return post as PostModel;
  }

  @Authorized()
  @Mutation(() => Boolean)
  async likePost(
    @Ctx() { req }: DataContext,
    @Arg('postId', () => ID, { nullable: false }) postId: string,
    @PubSub() pubSub: PubSubEngine
  ): Promise<boolean> {
    if (!req?.user?.id) throw new UnauthorizedError();

    try {
      const postLikes = await this.postService.addLike(postId, req.user.id);
      await pubSub.publish(postLikeTopic, postLikes);
    } catch (error) {
      return false;
    }

    return true;
  }

  @Authorized()
  @Mutation(() => Boolean)
  async unlikePost(
    @Ctx() { req }: DataContext,
    @Arg('postId', () => ID, { nullable: false }) postId: string,
    @PubSub() pubSub: PubSubEngine
  ): Promise<boolean> {
    if (!req?.user?.id) throw new UnauthorizedError();

    try {
      const postLikes = await this.postService.removeLike(postId, req.user.id);
      await pubSub.publish(postLikeTopic, postLikes);
    } catch (error) {
      return false;
    }
    return true;
  }

  @Authorized()
  @Mutation(() => PostModel)
  async editPost(
    @Ctx() { req }: DataContext,
    @Arg('postId', () => ID, { nullable: false }) postId: string,
    @Arg('input', () => EditPostInput, { nullable: false }) input: EditPostInput
  ): Promise<Post> {
    const post = await this.postService.find(postId);
    if (post?.authorId !== req?.user?.id) throw new UnauthorizedError();
    return await this.postService.edit(postId, input);
  }

  @Subscription(() => PostViews, { topics: postViewTopic })
  postViews(@Root() postView: PostViews): PostViews {
    return postView;
  }

  @Subscription(() => PostLikes, { topics: postLikeTopic })
  postLikes(@Root() postLike: PostLikes): PostLikes {
    return postLike;
  }
}

export default PostResolver;
