import { IsDateString, IsEnum, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MatchType, winnerType } from '../../../../../core/enum/enum';


export class CreateMatchesRequest {
  @IsInt()
  @Min(1)
  @ApiProperty()
  firstPlayer: number;


  @IsInt()
  @Min(1)
  @ApiProperty()
  firstPlayerResult: number;

  @IsInt()
  @Min(1)
  @ApiProperty()
  secondPlayer: number;

  @IsInt()
  @Min(1)
  @ApiProperty()
  secondPlayerResult: number;

  @IsEnum(MatchType)
  @ApiProperty()
  type: MatchType;

  @IsInt()
  @Min(1)
  @ApiProperty()
  moves: number;

  @IsDateString()
  @ApiProperty()
  date: string;

  @IsEnum(winnerType)
  @ApiProperty()
  winner: winnerType;

}