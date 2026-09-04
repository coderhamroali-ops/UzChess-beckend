import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTermsRequest {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;
}