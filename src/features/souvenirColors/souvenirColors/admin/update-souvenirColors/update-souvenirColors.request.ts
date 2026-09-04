import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSouvenirColorsRequest {

  @IsInt()
  @Min(1)
  @ApiProperty()
  souvenirId: number;

  @IsInt()
  @Min(1)
  @ApiProperty()
  colorId: number;
}