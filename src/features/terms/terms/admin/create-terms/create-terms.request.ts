import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTermsRequest {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;
}