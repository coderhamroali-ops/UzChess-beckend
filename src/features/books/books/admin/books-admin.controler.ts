import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { GetAllBooksHandler } from './get-all-books/get-all-books.handler';
import { CreateBooksHandler } from './create-book/create-books.handler';
import { CreateBooksRequest } from './create-book/create-books.request';
import { GetAllBooksRequest } from './get-all-books/get-all-books.request';
import { DeleteBooksHandler } from './delete-books/delete-books.handler';
import { UpdateBooksHandler } from './update-books/update-books.handler';
import { UpdateBooksRequest } from './update-books/update-books.request';

@Controller('admin/Books')
export class BooksAdminControler {
  constructor(
    private createHandler: CreateBooksHandler,
    private getAllHandler: GetAllBooksHandler,
    private deleteHandler: DeleteBooksHandler,
    private updateHandler: UpdateBooksHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateBooksRequest) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllBooksRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateBooksRequest) {
    return await this.updateHandler.execute(id, payload)
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }
}