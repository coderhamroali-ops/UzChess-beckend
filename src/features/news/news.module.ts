import { Module } from '@nestjs/common';
import { NewsAdminController } from './news/admin/news-admin.controller';
import { CreateNewsHandler } from './news/admin/create-news/create-news.handler';
import { GetAllNewsHandler } from './news/admin/get-all-news/get-all-news.handler';
import { UpdateNewsHandler } from './news/admin/update-news/update-news.handler';
import { DeleteNewsHandler } from './news/admin/delete-news/delete-news.handler';
import { NewsPublicController } from './news/public/news-public-controller';
import { GetAllNewsHandlerPub } from './news/public/get-all-news/get-all-news.handler';

@Module({
  controllers: [
    NewsAdminController,
    NewsPublicController,
  ],
  providers: [
    CreateNewsHandler,
    GetAllNewsHandler,
    UpdateNewsHandler,
    DeleteNewsHandler,
    GetAllNewsHandlerPub,
  ]
})
export class NewsModule {

}