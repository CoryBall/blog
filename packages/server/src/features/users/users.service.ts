import { PrismaClient, Role, User } from '@blog/prisma';
import { Service } from 'typedi';
import { CreateUserInput } from '@blog/server/features/users';

@Service('UserService')
class UserService {
  private readonly prisma = new PrismaClient();

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { email: email } });
  }

  async findById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { id: id } });
  }

  async create(input: CreateUserInput, role: Role): Promise<User> {
    return await this.prisma.user.create({
      data: {
        role: {
          connect: {
            id: role.id,
          },
        },
        name: input.name,
        email: input.email,
      },
    });
  }
}

export default UserService;
