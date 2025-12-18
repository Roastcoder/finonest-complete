import { IsNumber, Min, Max } from 'class-validator';

export class CheckEligibilityDto {
  @IsNumber()
  @Min(0)
  income: number;

  @IsNumber()
  @Min(18)
  @Max(100)
  age: number;
}