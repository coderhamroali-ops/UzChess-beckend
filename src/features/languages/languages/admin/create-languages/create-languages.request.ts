import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguagesRequest {
  @IsString()
  @MaxLength(32)
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  @MaxLength(2)
  code: string;
}