import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { reportType } from '../../../../../core/enum/enum';

export class CreateReportsRequest {

  @ApiProperty()
  @IsInt()
  @Min(1)
  userId: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  categoryId: number;

  @ApiProperty()
  @IsEnum(reportType)
  target: reportType;

  @ApiProperty()
  @IsInt()
  @Min(1)
  targetId: number;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  description?: string;
}