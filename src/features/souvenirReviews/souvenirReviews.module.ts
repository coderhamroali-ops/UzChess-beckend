import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SouvenirReviewsEntity } from './entities/souvenirReviews.entities';
import { SouvenirReviewsAdminController } from './souvenirReviews/admin/souvenirReviews-admin.controller';
import {
  CreateSouvenirReviewsHandler
} from './souvenirReviews/admin/create-souvenirReviews/create-souvenirReviews.handler';
import {
  GetAllSouvenirReviewsHandler
} from './souvenirReviews/admin/get-all-souvenirReviews/get-all-souvenirReviews.handler';
import {
  UpdateSouvenirReviewsHandler
} from './souvenirReviews/admin/update-souvenirReviews/update-souvenirReviews.handler';
import {
  DeleteSouvenirReviewsHandler
} from './souvenirReviews/admin/delete-souvenirReviews/delete-souvenirReviews.handler';
import { SouvenirReviewsPublicController } from './souvenirReviews/public/souvenirReviews.public.controller';
import {
  GetAllSouvenirReviewsHandlerPub
} from './souvenirReviews/public/get-all-souvenirReviews/get-all-souvenirReviews.handler';



@Module({
  imports: [
    TypeOrmModule.forFeature([
      SouvenirReviewsEntity,
    ]),
  ],

  controllers: [
    SouvenirReviewsAdminController,
    SouvenirReviewsPublicController,
  ],

  providers: [
    CreateSouvenirReviewsHandler,
    GetAllSouvenirReviewsHandler,
    UpdateSouvenirReviewsHandler,
    DeleteSouvenirReviewsHandler,
    GetAllSouvenirReviewsHandlerPub,
  ],
})
export class SouvenirReviewsModule {}