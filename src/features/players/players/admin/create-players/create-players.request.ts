import { IsInt, IsString, MaxLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayersRequest {
  @IsInt()
  @Min(1)
  @ApiProperty()
  countryId: number;

  @IsString()
  @MaxLength(128)
  @ApiProperty()
  fulName: string;

  @IsString()
  @MaxLength(64)
  @ApiProperty()
  image: string;

  @IsInt()
  @Min(1)
  @ApiProperty()
  classic: number;

  @IsInt()
  @Min(1)
  @ApiProperty()
  rapid: number;


  @IsInt()
  @Min(1)
  @ApiProperty()
  blitz: number;
}