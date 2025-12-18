import { IsString, IsNumber, IsOptional } from 'class-validator';

export class ApplyLoanDto {
  @IsString()
  productId: string;

  @IsNumber()
  amount: number;

  @IsOptional()
  documents?: any;
}