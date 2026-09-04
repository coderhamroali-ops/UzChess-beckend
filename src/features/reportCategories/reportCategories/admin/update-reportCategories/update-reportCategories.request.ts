import { IsInt, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateReportCategoriesRequest {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  title: string;

  @IsInt()
  @ApiProperty()
  order: number;
}