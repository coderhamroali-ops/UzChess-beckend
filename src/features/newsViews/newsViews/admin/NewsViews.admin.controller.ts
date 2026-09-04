import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateNewsViewsHandler } from './creare-newsViews/create-newsViews.handler';
import { GetAllNewsViewsHandler } from './get-all-newsViews/get-all-NewsViews.handler';
import { UpdateNewsViewsHandler } from './update-newsViews/update-NewsViews.handler';
import { DeleteNewsViewsHandler } from './delete-newsViews/delete-NewsViews.handler';
import { CreateNewsViewsRequest } from './creare-newsViews/create-newsViews.request';
import { GetAllNewsViewsReques } from './get-all-newsViews/get-all-NewsViews.reques';
import { UpdateNewsViewsRequest } from './update-newsViews/update-NewsViews.request';


@Controller('admin/news-views')
export class NewsViewsAdminController {
  constructor(
    private  createHandler: CreateNewsViewsHandler,
    private  getAllHandler: GetAllNewsViewsHandler,
    private  updateHandler: UpdateNewsViewsHandler,
    private  deleteHandler: DeleteNewsViewsHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateNewsViewsRequest) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllNewsViewsReques) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateNewsViewsRequest) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }
}