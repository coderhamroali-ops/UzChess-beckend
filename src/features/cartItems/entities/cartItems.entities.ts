import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';
import { cartItemType } from '../../../core/enum/enum';

@Entity('cart_items')
export class CartItemsEntity extends BaseModel {

  @Column()
  userId: number;

  @Column({
    type: 'enum',
    enum: cartItemType,
  })
  target: cartItemType;

  @Column()
  targetId: number;

  @Column({
    default: 1,
  })
  quantity: number;
}