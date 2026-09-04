import { IsInt,  IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';
import { ApiProperty,  } from '@nestjs/swagger';

export class CreateSouvenirReviewsRequest {

  @IsInt()
  @Min(1)
  @ApiProperty()
  userId: number;

  @IsInt()
  @Min(1)
  @ApiProperty()
  souvenirId: number;

  @IsInt()
  @Min(1)
  @Max(5)
  @ApiProperty()
  rating: number;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  @ApiProperty()
  comment?: string;
}