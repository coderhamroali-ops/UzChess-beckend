import { Controller, Get, Query } from '@nestjs/common';
import { GetAllBookCategoriesHandlerPup } from './get-all-book-category/get-all-book-categories.handler';
import { GetAllBookCategoriesRequest } from './get-all-book-category/get-all-book-categories.request';

@Controller('public/book-categories')
export class BookCategoriesPublicControler {
  constructor(
    private readonly getAllHandler: GetAllBookCategoriesHandlerPup,
  ) {}

  @Get('list')
  async getAll(@Query() filter: GetAllBookCategoriesRequest) {
    return await this.getAllHandler.execute(filter);
  }
}