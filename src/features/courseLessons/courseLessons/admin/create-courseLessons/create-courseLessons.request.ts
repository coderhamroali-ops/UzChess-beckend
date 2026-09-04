import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateCourseLessonsRequest {

  @ApiProperty()
  @IsInt()
  @Min(1)
  courseId: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  courseSectionId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  title: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  thumbnail?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  video: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;

  @ApiProperty()
  @IsDateString()
  date: Date;

  @ApiProperty({
    default: false,
  })
  @IsBoolean()
  isFree: boolean;
}