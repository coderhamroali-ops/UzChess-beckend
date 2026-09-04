import { IsInt,  MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNewsViewsRequest {
  @IsInt()
  @MaxLength(34)
  @ApiProperty()
  userId: number;

  @IsInt()
  @MaxLength(34)
  @ApiProperty()
  newsId: number;

  @IsInt()
  @MaxLength(64)
  @ApiProperty()
  firstDate: number;

  @IsInt()
  @MaxLength(64)
  @ApiProperty()
  lastDate: number;

  @IsInt()
  @MaxLength(64)
  @ApiProperty()
  count: number;
}