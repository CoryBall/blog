import { Post, PrismaClient } from '@blog/prisma';
import { Service } from 'typedi';
import { CreatePostInput, EditPostInput } from '@blog/server/features/posts';

@Service()
class PostsService {
  private readonly prisma = new PrismaClient();

  async create(input: CreatePostInput, userId: string): Promise<Post> {
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
    });
  }

  async publish(id: string): Promise<Post> {
    return await this.prisma.post.update({
      where: { id },
      data: {
        published: true,
      },
    });
  }

  async edit(id: string, input: EditPostInput): Promise<Post> {
    return await this.prisma.post.update({
      where: { id },
      data: {
        title: input.title,
        body: input.body,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.post.update({
      where: { id },
      data: { isDeleted: true },
    });
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

export default PostsService;
