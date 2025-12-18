import { Injectable } from '@nestjs/common';
import type { Multer } from 'multer';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService) {}

  async upload(file: Multer.File) {
    return this.prisma.image.create({
      data: {
        filename: `${Date.now()}-${file.originalname}`,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        data: file.buffer,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.image.findUnique({ where: { id } });
  }

  async findAll() {
    return this.prisma.image.findMany({
      select: { id: true, filename: true, originalName: true, mimeType: true, size: true, createdAt: true },
    });
  }
}