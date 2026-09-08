import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCoursesRequest {
  @Type(() => Number)
  @IsNumber()
  authorId: number;

  @Type(() => Number)
  @IsNumber()
  categoryId: number;

  @Type(() => Number)
  @IsNumber()
  languageId: number;

  @Type(() => Number)
  @IsNumber()
  difficultyId: number;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  image?: string;

  @Type(() => Number)
  @IsNumber()
  price: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  newPrice?: number;


  @Transform(({ value }) => {
    if (typeof value === 'boolean') return value;

    if (value === 'true' || value === '1') {
      return true;
    }

    if (value === 'false' || value === '0') {
      return false;
    }

    return undefined;
  })
  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  reviewsCount?: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  rating?: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  sectionsCount?: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  lessonsCount?: number;
}