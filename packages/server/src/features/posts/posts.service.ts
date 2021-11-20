import { Post, PrismaClient, Tag } from '@blog/prisma';
import { Service } from 'typedi';
import {
  CreatePostInput,
  EditPostInput,
  PostViews,
  PostLikes,
} from '@blog/server/features/posts';
import { UserModel } from '../users';
import { ApolloError } from 'apollo-server-errors';

@Service('PostService')
class PostService {
  private readonly prisma = new PrismaClient();

  private readonly postIncludes = {
    author: {
      include: {
        socials: true,
      },
    },
    tags: {
      include: {
        tag: true,
      },
    },
  };

  async create(input: CreatePostInput, userId: string): Promise<Post> {
    const exists = await this.prisma.post.count({
      where: { slug: this.slugify(input.title) },
    });
    if (exists) {
      throw new ApolloError('Post with that title already exists');
    }
    return await this.prisma.post.create({
      data: {
        title: input.title,
        slug: this.slugify(input.title),
        body: input.body,
        views: 0,
        likes: 0,
        author: {
          connect: {
            id: userId,
          },
        },
        published: false,
      },
      include: this.postIncludes,
    });
  }

  async drafts(userId: string): Promise<Post[]> {
    return await this.prisma.post.findMany({
      where: {
        isDeleted: false,
        published: false,
        authorId: userId,
      },
      include: this.postIncludes,
    });
  }

  async publish(id: string): Promise<Post> {
    return await this.prisma.post.update({
      where: { id },
      data: {
        published: true,
        publishedAt: new Date(),
      },
      include: this.postIncludes,
    });
  }

  async all(): Promise<Post[]> {
    return await this.prisma.post.findMany({
      where: { isDeleted: false, published: true },
      include: this.postIncludes,
      orderBy: [
        {
          likes: 'desc',
        },
        {
          publishedAt: 'desc',
        },
      ],
    });
  }

  async userPosts(userId: string): Promise<Post[]> {
    return await this.prisma.post.findMany({
      where: {
        isDeleted: false,
        authorId: userId,
      },
      include: this.postIncludes,
      orderBy: [
        {
          published: 'asc',
        },
        {
          updatedAt: 'desc',
        },
      ],
    });
  }

  async allByTag(tag: Tag): Promise<Post[]> {
    const postIds = (
      await this.prisma.postTags.findMany({
        where: { tagId: tag.id },
      })
    ).map((x) => x.postId);

    return await this.prisma.post.findMany({
      where: {
        id: { in: postIds },
        isDeleted: false,
        published: true,
      },
      include: this.postIncludes,
    });
  }

  async find(id: string): Promise<Post | null> {
    return await this.prisma.post.findUnique({
      where: { id },
      include: this.postIncludes,
    });
  }

  async findBySlug(slug: string): Promise<Post | null> {
    return await this.prisma.post.findUnique({
      where: { slug },
      include: this.postIncludes,
    });
  }

  async edit(id: string, input: EditPostInput): Promise<Post> {
    if (input.tagIds.length !== 0) {
      input.tagIds.forEach(async (tagId: string) => {
        await this.prisma.postTags.create({
          data: {
            post: {
              connect: {
                id,
              },
            },
            tag: {
              connect: {
                id: tagId,
              },
            },
          },
        });
      });
    }

    return await this.prisma.post.update({
      where: { id },
      data: {
        title: input.title,
        body: input.body,
      },
      include: this.postIncludes,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.post.update({
      where: { id },
      data: { isDeleted: true },
    });
  }

  async addView(
    id: string,
    userId: string | undefined = undefined
  ): Promise<PostViews> {
    if (userId) {
      const alreadyViewed = await this.prisma.postsViewedByUsers.count({
        where: {
          userId: userId,
          postId: id,
        },
      });

      if (!alreadyViewed) {
        await this.prisma.postsViewedByUsers.create({
          data: {
            user: {
              connect: {
                id: userId,
              },
            },
            post: {
              connect: {
                id,
              },
            },
          },
        });
      }
    }
    await this.prisma.post.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    const post = await this.prisma.post.findUnique({
      where: { id },
    });

    const postViews = await this.prisma.postsViewedByUsers.findMany({
      where: {
        postId: id,
      },
    });

    const userIds = postViews
      ? postViews.map((postView) => postView.userId)
      : [];

    const users = await this.prisma.user.findMany({
      where: {
        id: {
          in: userIds,
        },
      },
      include: {
        socials: true,
      },
    });

    return {
      users: users as UserModel[],
      views: post?.views ?? 0,
    };
  }

  async addLike(id: string, userId: string): Promise<PostLikes> {
    const alreadyLiked = await this.prisma.postsLikedByUsers.count({
      where: {
        userId: userId,
        postId: id,
      },
    });
    if (!alreadyLiked) {
      await this.prisma.postsLikedByUsers.create({
        data: {
          user: {
            connect: {
              id: userId,
            },
          },
          post: {
            connect: {
              id,
            },
          },
        },
      });
      await this.prisma.post.update({
        where: { id },
        data: {
          likes: {
            increment: 1,
          },
        },
      });
    }

    const post = await this.prisma.post.findUnique({
      where: { id },
    });

    const postLikes = await this.prisma.postsLikedByUsers.findMany({
      where: {
        postId: id,
      },
    });

    const userIds = postLikes
      ? postLikes.map((postLike) => postLike.userId)
      : [];

    const users = await this.prisma.user.findMany({
      where: {
        id: {
          in: userIds,
        },
      },
      include: {
        socials: true,
      },
    });

    return {
      users: users as UserModel[],
      likes: post?.likes ?? 0,
    };
  }

  async removeLike(id: string, userId: string): Promise<PostLikes> {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) throw new ApolloError('Could not find Post');
    const updatedPost = await this.prisma.post.update({
      where: { id },
      data: { likes: { decrement: post.likes <= 0 ? 0 : 1 } },
    });
    await this.prisma.postsLikedByUsers.deleteMany({
      where: {
        userId,
        postId: id,
      },
    });
    const postLikes = await this.prisma.postsLikedByUsers.findMany({
      where: {
        userId,
        postId: id,
      },
    });

    const userIds = postLikes
      ? postLikes.map((postLike) => postLike.userId)
      : [];

    const users = await this.prisma.user.findMany({
      where: {
        id: {
          in: userIds,
        },
      },
      include: {
        socials: true,
      },
    });

    return {
      users: users as UserModel[],
      likes: updatedPost?.likes ?? 0,
    };
  }

  private slugify(str: string): string {
    let slug = str.replace(/^\s+|\s+$/g, ''); // trim
    slug = slug.toLowerCase();

    // remove accents, swap ñ for n, etc
    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
      slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    slug = slug
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    return slug;
  }
}

export default PostService;
