import { IsNotEmpty,  IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookCategoriesRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;
}