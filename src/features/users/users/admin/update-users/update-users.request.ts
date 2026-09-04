import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { loginType, role } from '../../../../../core/enum/enum';

export class UpdateUsersRequest {

  @IsEnum(role)
  @ApiProperty()
  role: role;

  @IsString()
  @MaxLength(64)
  @ApiProperty()
  fullName: string;

  @IsString()
  @MaxLength(128)
  @ApiProperty()
  profileImage: string;

  @IsString()
  @MaxLength(64)
  @ApiProperty()
  login: string;

  @IsEnum(loginType)
  @ApiProperty()
  loginType: loginType;

  @IsString()
  @MaxLength(128)
  @ApiProperty()
  password: string;

  @IsDateString()
  @ApiProperty()
  birthDate: Date;

  @IsBoolean()
  @ApiProperty()
  isVerified: boolean;

  @IsBoolean()
  @ApiProperty()
  isActive: boolean;
}