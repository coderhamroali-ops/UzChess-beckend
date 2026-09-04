import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateColorsRequest {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  color: string;
}