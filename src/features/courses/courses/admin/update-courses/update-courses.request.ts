import { IsBoolean, IsInt, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCoursesRequest {
  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  authorId: number;

  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  categoryId: number;

  @Type(() => Number)
  @ApiProperty()
  @IsInt()
  languageId: number;

  @Type(() => Number)
  @ApiProperty()
  @IsInt()
  difficultyId: number;

  @IsString()
  @ApiProperty()
  @MaxLength(128)
  title: string;

  @IsString()
  @ApiProperty()
  @MaxLength(128)
  image: string;

  @Type(() => Number)
  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @IsOptional()
  @ApiProperty()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  newPrice?: number;

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  isPublished?: boolean;

  @IsOptional()
  @Type(() => Number)
  @ApiProperty()
  @IsInt()
  reviewsCount?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 1 })
  @ApiProperty()
  rating?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  sectionsCount?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  lessonsCount?: number;
}