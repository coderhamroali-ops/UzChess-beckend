import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseSectionsRequest {

  @IsInt()
  @Min(1)
  @ApiProperty()
  courseId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @ApiProperty()
  title: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiProperty()
  order?: number;

  @IsDateString()
  @ApiProperty()
  date: Date;
}