import { PrismaClient, Role, LoanType } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@finonest.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@finonest.com',
      password: hashedPassword,
      role: Role.ADMIN,
    },
  });

  await prisma.loanProduct.createMany({
    data: [
      {
        name: 'Personal Loan',
        type: LoanType.PERSONAL,
        interest: 12.5,
        minAmount: 50000,
        maxAmount: 1000000,
        description: 'Quick personal loans for your needs',
      },
      {
        name: 'Home Loan',
        type: LoanType.HOME,
        interest: 8.25,
        minAmount: 500000,
        maxAmount: 10000000,
        description: 'Home loans at attractive rates',
      },
      {
        name: 'Business Loan',
        type: LoanType.BUSINESS,
        interest: 15.0,
        minAmount: 100000,
        maxAmount: 5000000,
        description: 'Grow your business with our loans',
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });