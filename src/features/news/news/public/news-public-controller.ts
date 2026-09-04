import { GetAllNewsHandlerPub } from './get-all-news/get-all-news.handler';
import { Controller, Get, Query } from '@nestjs/common';
import { GetAllNewsRequest } from './get-all-news/get-all-news.request';

@Controller('news/public')
export class NewsPublicController {
  constructor(
    private getAllHandler: GetAllNewsHandlerPub,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllNewsRequest) {
    return await this.getAllHandler.execute(filter)
  }
}