import { PrismaClient } from '@blog/prisma';
import { RoleValues } from '../config';

const prisma = new PrismaClient();
async function seedData(): Promise<void> {
  await prisma.role.upsert({
    where: { name: RoleValues.User },
    update: {},
    create: {
      name: RoleValues.User,
    },
  });

  await prisma.role.upsert({
    where: { name: RoleValues.Admin },
    update: {},
    create: {
      name: RoleValues.Admin,
    },
  });

  await prisma.$disconnect();
}

export default seedData;
