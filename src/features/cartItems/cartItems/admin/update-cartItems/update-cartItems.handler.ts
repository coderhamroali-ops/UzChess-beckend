import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdateCartItemsRequest } from './update-cartItems.request';
import { CartItemsEntity } from '../../../entities/cartItems.entities';

@Injectable()
export class UpdateCartItemsHandler {

  async execute(
    id: number,
    payload: UpdateCartItemsRequest,
  ) {

    const item = await CartItemsEntity.findOneBy({
      id,
    });

    if (!item) {
      throw new NotFoundException(
        'Cart item not found',
      );
    }

    const itemExists = await CartItemsEntity.exists({
      where: {
        id: Not(item.id),
        userId: payload.userId,
        target: payload.target,
        targetId: payload.targetId,
      },
    });

    if (itemExists) {
      throw new ConflictException(
        'This item already exists in cart',
      );
    }

    item.userId = payload.userId;
    item.target = payload.target;
    item.targetId = payload.targetId;
    item.quantity = payload.quantity;

    return await CartItemsEntity.save(item);
  }
}