import { PrismaClient, Comment } from '@blog/prisma';
import { Service } from 'typedi';
import { CreateCommentInput } from '@blog/server/features/comments';

@Service('CommentService')
class CommentService {
  private readonly prisma = new PrismaClient();

  async create(
    input: CreateCommentInput,
    postId: string,
    userId: string
  ): Promise<Comment> {
    return await this.prisma.comment.create({
      data: {
        body: input.body,
        author: {
          connect: {
            id: userId,
          },
        },
        post: {
          connect: {
            id: postId,
          },
        },
      },
      include: {
        author: {
          include: {
            socials: true,
          },
        },
      },
    });
  }
  async find(id: string): Promise<Comment | null> {
    return await this.prisma.comment.findUnique({ where: { id } });
  }

  async getByPost(postId: string): Promise<Comment[]> {
    return await this.prisma.comment.findMany({
      where: { postId, isDeleted: false },
      include: {
        author: {
          include: {
            socials: true,
          },
        },
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.comment.update({
      where: { id },
      data: { isDeleted: true },
    });
  }
}

export default CommentService;
