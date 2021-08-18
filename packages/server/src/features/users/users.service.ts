import { PrismaClient, User } from '@blog/prisma';
import { Service } from 'typedi';

@Service()
class UsersService {
  private readonly prisma = new PrismaClient();

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { email: email } });
  }

  async findById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { id: id } });
  }
}

export default UsersService;
