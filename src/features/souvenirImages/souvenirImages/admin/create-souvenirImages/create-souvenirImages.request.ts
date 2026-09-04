import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSouvenirImagesRequest {

  @IsInt()
  @Min(1)
  @ApiProperty()
  souvenirId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  @ApiProperty()
  image: string;
}