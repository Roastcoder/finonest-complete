import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { EligibilityService } from './eligibility.service';
import { CheckEligibilityDto } from './dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('eligibility')
@UseGuards(JwtAuthGuard)
export class EligibilityController {
  constructor(private eligibilityService: EligibilityService) {}

  @Post('check')
  async check(@CurrentUser() user: any, @Body() dto: CheckEligibilityDto) {
    return this.eligibilityService.check(user.id, dto);
  }
}