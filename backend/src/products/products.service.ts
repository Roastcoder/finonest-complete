import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto) {
    return this.prisma.loanProduct.create({ data });
  }

  async findAll() {
    return this.prisma.loanProduct.findMany({ where: { isActive: true } });
  }

  async findById(id: string) {
    return this.prisma.loanProduct.findUnique({ where: { id } });
  }
}