import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { loginType, role } from '../../../../../core/enum/enum';

export class CreateUsersRequest {

  @IsEnum(role)
  @ApiProperty()
  role: role;

  @IsString()
  @MaxLength(64)
  @ApiProperty()
  fullName: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiProperty({ required: false })
  profileImage?: string;

  @IsString()
  @MaxLength(64)
  @ApiProperty()
  login: string;

  @IsEnum(loginType)
  @ApiProperty()
  loginType: loginType;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiProperty({ required: false })
  password?: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ required: false })
  birthDate?: string;

  @IsBoolean()
  @ApiProperty()
  isVerified: boolean;

  @IsBoolean()
  @ApiProperty()
  isActive: boolean;
}