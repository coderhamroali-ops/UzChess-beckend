import { CreateAuthorsHandler } from './create-authors/create-authors.handler';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateAuthorsRequest } from './create-authors/create-authors.request';
import { GetAllAuthorsHandlerP } from '../public/get-all-authors/get-all-authors.handler';
import { UpdateAuthorsRequest } from './update-authors/update-authors.request';
import {
  GetAllBookCategoriesRequest,
} from '../../../Languges/book-categories/public/get-all-book-category/get-all-book-categories.request';
import { UpdateAuthorsHandler } from './update-authors/update-authors.handler';
import { DeleteAuthorsHandler } from './delete-authors/delete-authors.handler';
import { GetAllAuthorsHandler } from './get-all-authors/get-all-authors.handler';

@Controller('admin/Authors')
export class AuthorsAdminControler {
  constructor(
    private createHandler: CreateAuthorsHandler,
    private getAllHandler: GetAllAuthorsHandler,
    private updateHandler: UpdateAuthorsHandler,
    private deleteHandler: DeleteAuthorsHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateAuthorsRequest) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllBookCategoriesRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateAuthorsRequest) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('dalete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }
}