import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GetAllCartItemsHandler } from './get-all-cartItems/get-all-cartItems.handler';
import { CreateCartItemsHandler } from './create-cartItems/create-cartItems.handler';
import { UpdateCartItemsHandler } from './update-cartItems/update-cartItems.handler';
import { DeleteCartItemsHandler } from './delete-cartItems/delete-cartItems.handler';
import { CreateCartItemsRequest } from './create-cartItems/create-cartItems.request';
import { GetAllCartItemsRequest } from './get-all-cartItems/get-all-cartItems.request';
import { UpdateCartItemsRequest } from './update-cartItems/update-cartItems.request';



@Controller('admin/cart-items')
export class CartItemsAdminController {

  constructor(
    private getAllHandler: GetAllCartItemsHandler,
    private createItem: CreateCartItemsHandler,
    private updateHandler: UpdateCartItemsHandler,
    private deleteHandler: DeleteCartItemsHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateCartItemsRequest,
  ) {
    return await this.createItem.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllCartItemsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCartItemsRequest,
  ) {
    return await this.updateHandler.execute(
      id,
      payload,
    );
  }

  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.deleteHandler.execute(id);
  }
}