import { Module } from '@nestjs/common';
import { NewsViewsAdminController } from './newsViews/admin/NewsViews.admin.controller';
import { CreateNewsViewsHandler } from './newsViews/admin/creare-newsViews/create-newsViews.handler';
import { GetAllNewsViewsHandler } from './newsViews/admin/get-all-newsViews/get-all-NewsViews.handler';
import { UpdateNewsViewsHandler } from './newsViews/admin/update-newsViews/update-NewsViews.handler';
import { DeleteNewsViewsHandler } from './newsViews/admin/delete-newsViews/delete-NewsViews.handler';
import { NewsViewsPublicController } from './newsViews/public/NewsViews.public.controller';
import { GetAllNewsViewsHandlerPub } from './newsViews/public/get-all-NewsViews/get-all-NewsViews.handler';

@Module({
  controllers: [
    NewsViewsAdminController,
    NewsViewsPublicController,
  ],
  providers: [
    CreateNewsViewsHandler,
    GetAllNewsViewsHandler,
    UpdateNewsViewsHandler,
    DeleteNewsViewsHandler,
    GetAllNewsViewsHandlerPub,
  ]
})
export class NewsViewsModule {

}