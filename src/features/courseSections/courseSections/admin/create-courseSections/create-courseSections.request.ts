import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCourseSectionsRequest {

  @ApiProperty({
    example: 44,
    description: 'Course ID',
  })
  @IsInt()
  @Min(1)
  courseId: number;

  @ApiProperty({
    example: 'Introduction',
    description: 'Course section title',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  title: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'Section order',
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  order?: number;

  @ApiProperty({
    example: '2026-08-24T15:08:26.504Z',
    description: 'Section date',
    type: String,
    format: 'date-time',
  })
  @IsDateString()
  date: string;
}