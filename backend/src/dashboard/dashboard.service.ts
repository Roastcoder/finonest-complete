import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getStats(userRole: Role) {
    const stats = {
      totalUsers: await this.prisma.user.count(),
      totalLoans: await this.prisma.loanApplication.count(),
      pendingLoans: await this.prisma.loanApplication.count({ where: { status: 'PENDING' } }),
      approvedLoans: await this.prisma.loanApplication.count({ where: { status: 'APPROVED' } }),
    };

    if (userRole === Role.CUSTOMER) {
      return { message: 'Customer dashboard' };
    }

    return stats;
  }
}