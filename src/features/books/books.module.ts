import { Module } from '@nestjs/common';
import { CreateBooksHandler } from './books/admin/create-book/create-books.handler';
import { GetAllBooksHandler } from './books/admin/get-all-books/get-all-books.handler';
import { DeleteBooksHandler } from './books/admin/delete-books/delete-books.handler';
import { UpdateBooksHandler } from './books/admin/update-books/update-books.handler';
import { BooksEntity } from './entities/books.entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetAllBooksHandlerP } from './books/public/get-all-books/get-all-books.handler';
import { BooksPublicController } from './books/public/books-public.controller';
import { BooksAdminControler } from './books/admin/books-admin.controler';

@Module({
  imports: [TypeOrmModule.forFeature([BooksEntity]),],
  controllers: [
    BooksAdminControler,
    BooksPublicController,
  ],
  providers: [
    CreateBooksHandler,
    GetAllBooksHandler,
    DeleteBooksHandler,
    UpdateBooksHandler,
    GetAllBooksHandlerP,
  ]
})

export class BooksModule {

}