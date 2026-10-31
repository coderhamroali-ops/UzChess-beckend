import { Controller, Get, Query } from '@nestjs/common';
import { Auth } from '../../../../core/decorator/requires.decorator';
import {
  CurrentUser,
  TokenPayload,
} from '../../../../core/decorator/current-user.decorator';
import { GetAllCartItemsHandlerPub } from './get-all-cartItems/get-all-cartItems.handler';
import { GetAllCartItemsRequest } from './get-all-cartItems/get-all-cartItems.request';

@Controller('public/cart-items')
export class CartItemsPublicController {
  constructor(private getAllHandler: GetAllCartItemsHandlerPub) {}

  /** Faqat joriy foydalanuvchining yozuvlari */

  @Auth()
  @Get('list')
  async getAll(
    @CurrentUser() user: TokenPayload,

    @Query() filter: GetAllCartItemsRequest,
  ) {
    return await this.getAllHandler.execute(user.sub, filter);
  }
}
