import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateCartItemsRequest } from './create-cartItems.request';
import { CartItemsEntity } from '../../../entities/cartItems.entities';

@Injectable()
export class CreateCartItemsHandler {

  async execute(payload: CreateCartItemsRequest) {

    const itemExists = await CartItemsEntity.exists({
      where: {
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

    const newItem = CartItemsEntity.create({
      userId: payload.userId,
      target: payload.target,
      targetId: payload.targetId,
      quantity: payload.quantity,
    });

    return await CartItemsEntity.save(newItem);
  }
}