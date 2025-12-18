import { Controller, Get, Post, Param, Res, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import type { Multer } from 'multer';
import { ImagesService } from './images.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Post('upload')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Multer.File) {
    const image = await this.imagesService.upload(file);
    return { id: image.id, filename: image.filename };
  }

  @Get(':id')
  async serve(@Param('id') id: string, @Res() res: Response) {
    const image = await this.imagesService.findById(id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    res.set({
      'Content-Type': image.mimeType,
      'Content-Length': image.size.toString(),
    });
    
    res.send(image.data);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.imagesService.findAll();
  }
}