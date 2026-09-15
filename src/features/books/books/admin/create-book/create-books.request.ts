import { Allow, IsDate, IsInt, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UploadedFile } from '@nestjs/common';

export class CreateBooksRequest {
  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  authorId: number;

  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  categoryId: number;

  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  languageId: number;

  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  difficultyId: number;

  @IsString()
  @MaxLength(128)
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;

  @Allow()
  @ApiProperty({ type: 'string', format: 'binary' })
  image?: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty()
  price?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty()
  newPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 1 })
  @ApiProperty()
  rating?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  reviewsCount?: number;

  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  pages: number;

  @Type(() => Date)
  @IsDate()
  @ApiProperty()
  pubDate: number;

}
