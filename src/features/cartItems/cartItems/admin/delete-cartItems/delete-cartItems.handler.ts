import { NotFoundException } from '@nestjs/common';
import { CartItemsEntity } from '../../../entities/cartItems.entities';

export class DeleteCartItemsHandler {

  async execute(id: number) {

    const item = await CartItemsEntity.findOneBy({
      id,
    });

    if (!item) {
      throw new NotFoundException(
        'Cart item not found',
      );
    }

    return await CartItemsEntity.remove(item);
  }
}