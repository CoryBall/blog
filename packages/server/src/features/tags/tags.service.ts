import { PrismaClient, Tag } from '@blog/prisma';
import { Service } from 'typedi';
import { CreateTagInput } from '@blog/server/features/tags';

@Service('TagService')
class TagService {
  private readonly prisma = new PrismaClient();

  async create(input: CreateTagInput): Promise<Tag> {
    return await this.prisma.tag.create({
      data: {
        name: input.name,
      },
    });
  }

  async checkExists(input: CreateTagInput): Promise<boolean> {
    return (
      (await this.prisma.tag.count({
        where: {
          name: input.name,
        },
      })) !== 0
    );
  }

  async getAll(): Promise<Tag[]> {
    return await this.prisma.tag.findMany();
  }
}

export default TagService;
