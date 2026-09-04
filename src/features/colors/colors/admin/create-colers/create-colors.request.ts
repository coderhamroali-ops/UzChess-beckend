import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateColorsRequest {
  @IsString()
  @MaxLength(128)
  @ApiProperty()
  title: string;

  @IsString()
  @MaxLength(128)
  @ApiProperty()
  color: string;
}