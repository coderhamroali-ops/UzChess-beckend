import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { loginType } from '../../../core/enum/enum';

export class RegisterRequest {
  @IsString()
  @MinLength(2)
  @MaxLength(64)
  @ApiProperty()
  fullName: string;

  @IsString()
  @MinLength(3)
  @MaxLength(64)
  @ApiProperty()
  login: string;

  @IsIn([loginType.EMAIL, loginType.PHONE])
  @ApiProperty({ enum: [loginType.EMAIL, loginType.PHONE] })
  loginType: loginType;

  @IsString()
  @MinLength(8)
  @MaxLength(128)
  @ApiProperty()
  password: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ required: false })
  birthDate?: string;
}