import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDifficultiesRequest {
  @IsString()
  @MaxLength(128)
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  @MaxLength(128)
  icon: string;
}