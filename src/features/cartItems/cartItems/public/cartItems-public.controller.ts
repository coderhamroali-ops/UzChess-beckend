import { Controller, Get, Query } from '@nestjs/common';
import { GetAllCartItemsHandlerPub } from './get-all-cartItems/get-all-cartItems.handler';
import { GetAllCartItemsRequest } from './get-all-cartItems/get-all-cartItems.request';



@Controller('public/cart-items')
export class CartItemsPublicController {

  constructor(
    private getAllHandler: GetAllCartItemsHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllCartItemsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}