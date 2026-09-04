import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsInt, IsString, Length } from 'class-validator';
import { otpType } from '../../../../../core/enum/enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOtpCodesRequest {
  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  userId: number;

  @IsString()
  @Length(6, 6)
  @ApiProperty()
  code: string;

  @Type(() => Date)
  @IsDate()
  @ApiProperty()
  date: Date;

  @IsEnum(otpType)
  @ApiProperty()
  type: otpType;
}