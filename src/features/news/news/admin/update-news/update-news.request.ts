import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateNewsRequest {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  title: string;

  @IsString()
  @MaxLength(64)
  @ApiProperty()
  image: string;


  @IsString()
  @MaxLength(64)
  @ApiProperty()
  content: string;

  @ApiProperty()
  date: Date;
}