import { GetAllNewsHandlerPub } from './get-all-news/get-all-news.handler';
import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { GetAllNewsRequest } from './get-all-news/get-all-news.request';
import { GetOneNewsHandlerPub } from './get-one-news/get-one-news.handler';

@Controller('news/public')
export class NewsPublicController {
  constructor(
    private getAllHandler: GetAllNewsHandlerPub,
    private getOneHandler: GetOneNewsHandlerPub,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllNewsRequest) {
    return await this.getAllHandler.execute(filter)
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return await this.getOneHandler.execute(id);
  }
}
