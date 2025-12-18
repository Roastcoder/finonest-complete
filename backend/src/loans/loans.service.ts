import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ApplyLoanDto } from './dto';

@Injectable()
export class LoansService {
  constructor(private prisma: PrismaService) {}

  async apply(userId: string, dto: ApplyLoanDto) {
    return this.prisma.loanApplication.create({
      data: { userId, ...dto },
      include: { product: true },
    });
  }

  async findMyLoans(userId: string) {
    return this.prisma.loanApplication.findMany({
      where: { userId },
      include: { product: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAll() {
    return this.prisma.loanApplication.findMany({
      include: { user: { select: { id: true, name: true, email: true } }, product: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}