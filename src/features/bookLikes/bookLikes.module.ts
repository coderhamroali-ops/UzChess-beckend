import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookLikesEntity } from './entities/bookLikes.entities';
import { BookLikesAdminController } from './bookLikes/admin/bookLikes-admin.controller';
import { BookLikesPublicController } from './bookLikes/public/bookLikes-public.controller';
import { CreateBookLikesHandler } from './bookLikes/admin/create-bookLikes/create-bookLikes.handler';
import { GetAllBookLikesHandler } from './bookLikes/admin/get-all-bookLikes/get-all-bookLikes.handler';
import { GetAllBookLikesHandlerPub } from './bookLikes/public/get-all-bookLikes/get-all-bookLikes.handler';
import { UpdateBookLikesHandler } from './bookLikes/admin/update-bookLikes/update-bookLikes.handler';
import { DeleteBookLikesHandler } from './bookLikes/admin/delete-bookLikes/delete-bookLikes.handler';



@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookLikesEntity,
    ]),
  ],

  controllers: [
    BookLikesAdminController,
    BookLikesPublicController,
  ],

  providers: [
    CreateBookLikesHandler,
    GetAllBookLikesHandler,
    GetAllBookLikesHandlerPub,
    UpdateBookLikesHandler,
    DeleteBookLikesHandler,
  ],
})
export class BookLikesModule {}