import { CreateNewsHandler } from './create-news/create-news.handler';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateNewsRequest } from './create-news/create-news.request';
import { GetAllNewsRequest } from './get-all-news/get-all-news.request';
import { GetAllNewsHandler } from './get-all-news/get-all-news.handler';
import { UpdateNewsRequest } from './update-news/update-news.request';
import { UpdateNewsHandler } from './update-news/update-news.handler';
import { DeleteNewsHandler } from './delete-news/delete-news.handler';

@Controller('admin/news')
export class NewsAdminController {
  constructor(
    private createHandler: CreateNewsHandler,
    private getAllHandler: GetAllNewsHandler,
    private updateHandler: UpdateNewsHandler,
    private deleteHandler: DeleteNewsHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateNewsRequest) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllNewsRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateNewsRequest) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }
}