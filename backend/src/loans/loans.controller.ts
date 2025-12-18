import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { LoansService } from './loans.service';
import { ApplyLoanDto } from './dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Role } from '@prisma/client';

@Controller('loans')
@UseGuards(JwtAuthGuard, RolesGuard)
export class LoansController {
  constructor(private loansService: LoansService) {}

  @Post('apply')
  async apply(@CurrentUser() user: any, @Body() dto: ApplyLoanDto) {
    return this.loansService.apply(user.id, dto);
  }

  @Get('my')
  async findMyLoans(@CurrentUser() user: any) {
    return this.loansService.findMyLoans(user.id);
  }

  @Get('all')
  @Roles(Role.ADMIN, Role.MANAGER)
  async findAll() {
    return this.loansService.findAll();
  }
}