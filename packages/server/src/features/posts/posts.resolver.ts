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
} from 'type-graphql';
import { Inject, Service } from 'typedi';
import { Post } from '@blog/prisma';
import {
  PostsService,
  PostModel,
  PostViews,
  CreatePostInput,
} from '@blog/server/features/posts';
import { UserModel, UsersService } from '@blog/server/features/users';
import { ApolloError } from 'apollo-server-express';

const postViewTopic = 'POST_VIEW_UPDATE';
// const postLikeTopic = 'POST_LIKE_UPDATE';

@Service()
@Resolver()
class PostsResolver {
  @Inject('PostsService')
  private readonly postsService: PostsService;
  @Inject('UsersService')
  private readonly usersService: UsersService;

  @Query(() => [PostModel], { nullable: false })
  async allPosts(): Promise<Post[]> {
    return (await this.postsService.all()) as PostModel[];
  }

  @Query(() => PostModel, { nullable: true })
  async getPost(
    @Ctx() { req }: DataContext,
    @Arg('postId', () => ID, { nullable: false }) id: string,
    @PubSub() pubSub: PubSubEngine
  ): Promise<Post> {
    const views = await this.postsService.addView(id, req?.user?.id);
    await pubSub.publish(postViewTopic, views);
    return (await this.postsService.find(id)) as PostModel;
  }

  @Authorized()
  @Mutation(() => PostModel, { nullable: false })
  async createPost(
    @Ctx() { req }: DataContext,
    @Arg('input', () => CreatePostInput, { nullable: false })
    input: CreatePostInput
  ): Promise<Post> {
    if (!req?.user?.id) throw new UnauthorizedError();
    const user = (await this.usersService.findById(req?.user?.id)) as UserModel;
    if (!user) throw new ApolloError('Could not verify user. Please log in.');
    return await this.postsService.create(input, user.id);
  }

  @Subscription(() => PostViews, { topics: postViewTopic })
  postViews(@Root() postView: PostViews): PostViews {
    return postView;
  }
}

export default PostsResolver;
