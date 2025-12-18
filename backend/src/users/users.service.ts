import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: { name: string; email: string; password: string; phone?: string; role?: Role }) {
    return this.prisma.user.create({ data });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: { id: true, name: true, email: true, phone: true, role: true, createdAt: true },
    });
  }
}