import { GetAllBooksHandlerP } from './get-all-books/get-all-books.handler';
import { Controller, Get, Query } from '@nestjs/common';
import { GetAllBooksRequest } from './get-all-books/get-all-books.request';

@Controller('public/Books')
export class BooksPublicController {
  constructor(
    private getAllHandler: GetAllBooksHandlerP,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllBooksRequest) {
    return await this.getAllHandler.execute(filter)
  }
}