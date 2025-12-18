import { IsString, IsNumber, IsEnum, IsOptional, IsBoolean } from 'class-validator';
import { LoanType } from '@prisma/client';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsEnum(LoanType)
  type: LoanType;

  @IsNumber()
  interest: number;

  @IsNumber()
  minAmount: number;

  @IsNumber()
  maxAmount: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}