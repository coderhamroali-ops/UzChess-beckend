import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, Min } from 'class-validator';
import { cartItemType } from '../../../../../core/enum/enum';

export class CreateCartItemsRequest {

  @ApiProperty()
  @IsInt()
  @Min(1)
  userId: number;

  @ApiProperty()
  @IsEnum(cartItemType)
  target: cartItemType;

  @ApiProperty()
  @IsInt()
  @Min(1)
  targetId: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  quantity: number;
}