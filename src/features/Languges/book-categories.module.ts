import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCategoriesPublicControler } from './book-categories/public/book-categories-public.controler';
import { CreateBookCategoriesHandler } from './book-categories/admin/create-book-category/create-book-categories.handler';
import { DeleteBookCategoriesHandler } from './book-categories/admin/delete-book-category/delete-book-categories.handler';
import { UpdateBookCategoriesHandler } from './book-categories/admin/update-book-category/update-book-categories.handler';
import {

  GetAllBookCategoriesHandlerPup,
} from './book-categories/public/get-all-book-category/get-all-book-categories.handler';
import {
  GetAllBookCategoriesHandler
} from './book-categories/admin/get-all-book-category/get-all-book-categories.handler';
import { Entitybook } from './entities/book-category.entities';
import { BookCategoriesAdminControler } from './book-categories/admin/book-categories.admin.controler';

@Module({
  imports: [
    TypeOrmModule.forFeature([Entitybook]),
  ],
  controllers: [
    BookCategoriesAdminControler,
    BookCategoriesPublicControler,
  ],
  providers: [
    CreateBookCategoriesHandler,
    GetAllBookCategoriesHandler,
    DeleteBookCategoriesHandler,
    UpdateBookCategoriesHandler,
    GetAllBookCategoriesHandlerPup
  ],
})
export class BookCategoriesModule {}