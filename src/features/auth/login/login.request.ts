import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  login: string;

  @IsString()
  @MaxLength(128)
  @ApiProperty()
  password: string;
}