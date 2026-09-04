import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookReviewsEntity } from './entities/bookReviews.entities';
import { BookReviewsAdminController } from './bookReviews/admin/bookReviews-admin.controller';
import { BookReviewsPublicController } from './bookReviews/public/bookReviews-public.conntroller';
import { CreateBookReviewsHandler } from './bookReviews/admin/create-bookReviews/create-bookReviews.handler';
import { GetAllBookReviewsHandler } from './bookReviews/admin/get-all-bookReviews/get-all-bookReviews.handler';
import { GetAllBookReviewsHandlerPub } from './bookReviews/public/get-all-bookReviews/get-all-bookReviews.handler';
import { UpdateBookReviewsHandler } from './bookReviews/admin/update-bookReviews/update-bookReviews.handler';
import { DeleteBookReviewsHandler } from './bookReviews/admin/delete-bookReviews/delete-bookReviews.handler';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookReviewsEntity,
    ]),
  ],

  controllers: [
    BookReviewsAdminController,
    BookReviewsPublicController,
  ],

  providers: [
    CreateBookReviewsHandler,
    GetAllBookReviewsHandler,
    GetAllBookReviewsHandlerPub,
    UpdateBookReviewsHandler,
    DeleteBookReviewsHandler,
  ],
})
export class BookReviewsModule {}