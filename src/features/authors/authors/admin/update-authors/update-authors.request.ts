import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAuthorsRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fullName: string
}