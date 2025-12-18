import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CheckEligibilityDto } from './dto';

@Injectable()
export class EligibilityService {
  constructor(private prisma: PrismaService) {}

  async check(userId: string, dto: CheckEligibilityDto) {
    const score = this.calculateScore(dto);
    const eligible = score >= 60;

    await this.prisma.eligibilityCheck.create({
      data: { userId, ...dto, score, eligible },
    });

    return { score, eligible };
  }

  private calculateScore(dto: CheckEligibilityDto): number {
    let score = 0;
    if (dto.income >= 50000) score += 40;
    else if (dto.income >= 30000) score += 25;
    if (dto.age >= 25 && dto.age <= 55) score += 30;
    else if (dto.age >= 21 && dto.age <= 60) score += 20;
    score += 30;
    return Math.min(score, 100);
  }
}