import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItemsEntity } from './entities/cartItems.entities';
import { CartItemsAdminController } from './cartItems/admin/cartItems-admin.controller';
import { CartItemsPublicController } from './cartItems/public/cartItems-public.controller';
import { CreateCartItemsHandler } from './cartItems/admin/create-cartItems/create-cartItems.handler';
import { GetAllCartItemsHandler } from './cartItems/admin/get-all-cartItems/get-all-cartItems.handler';
import { GetAllCartItemsHandlerPub } from './cartItems/public/get-all-cartItems/get-all-cartItems.handler';
import { UpdateCartItemsHandler } from './cartItems/admin/update-cartItems/update-cartItems.handler';
import { DeleteCartItemsHandler } from './cartItems/admin/delete-cartItems/delete-cartItems.handler';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CartItemsEntity,
    ]),
  ],

  controllers: [
    CartItemsAdminController,
    CartItemsPublicController,
  ],

  providers: [
    CreateCartItemsHandler,
    GetAllCartItemsHandler,
    GetAllCartItemsHandlerPub,
    UpdateCartItemsHandler,
    DeleteCartItemsHandler,
  ],
})
export class CartItemsModule {}