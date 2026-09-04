import { Controller, Get, Query } from '@nestjs/common';
import { GetAllNewsViewsHandlerPub } from './get-all-NewsViews/get-all-NewsViews.handler';
import { GetAllNewsViewsReques } from './get-all-NewsViews/get-all-NewsViews.request';

@Controller('public/news-views')
export class NewsViewsPublicController {
  constructor(
    private readonly getAllHandler: GetAllNewsViewsHandlerPub,
  ) {}

  @Get('list')
  async getAll(@Query() filter: GetAllNewsViewsReques) {
    return await this.getAllHandler.execute(filter);
  }
}