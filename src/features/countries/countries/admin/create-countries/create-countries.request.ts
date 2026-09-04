import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCountriesRequest {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  title: string;

  @IsString()
  @MaxLength(64)
  @ApiProperty()
  flag: string;
}