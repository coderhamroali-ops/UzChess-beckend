import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateBookCategoriesHandler } from './create-book-category/create-book-categories.handler';
import { CreateBookCategoriesRequest } from './create-book-category/create-book-categories.request';
import { GetAllBookCategoriesRequest } from '../public/get-all-book-category/get-all-book-categories.request';
import { DeleteBookCategoriesHandler } from './delete-book-category/delete-book-categories.handler';
import { UpdateBookCategoriesHandler } from './update-book-category/update-book-categories.handler';
import { UpdateBookCategoriesRequest } from './update-book-category/update-book-categories.request';
import { GetAllBookCategoriesHandler } from './get-all-book-category/get-all-book-categories.handler';

@Controller('admin/book-categories')
export class BookCategoriesAdminControler {
  constructor(
    private getAllHandler: GetAllBookCategoriesHandler,
    private createcategories: CreateBookCategoriesHandler,
    private updateHandler: UpdateBookCategoriesHandler,
    private deleteHandler: DeleteBookCategoriesHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateBookCategoriesRequest) {
    return await this.createcategories.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllBookCategoriesRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateBookCategoriesRequest) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }
}