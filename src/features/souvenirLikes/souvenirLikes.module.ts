import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SouvenirLikesEntity } from './entities/souvenirLikes.entities';
import { SouvenirLikesAdminController } from './souvenirLikes/admin/souvenirLikes-admin-controller';
import { SouvenirLikesPublicController } from './souvenirLikes/public/souvenirLikes-public.controller';
import { CreateSouvenirLikesHandler } from './souvenirLikes/admin/create-souvenirLikes/create-souvenirLikes.handler';
import { GetAllSouvenirLikesHandler } from './souvenirLikes/admin/get-all-souvenirLikes/get-all-souvenirLikes.handler';
import { UpdateSouvenirLikesHandler } from './souvenirLikes/admin/update-souvenirLikes/update-souvenirLikes.handler';
import { DeleteSouvenirLikesHandler } from './souvenirLikes/admin/delete-souvenirLikes/delete-souvenirLikes.handler';
import {
  GetAllSouvenirLikesHandlerPub
} from './souvenirLikes/public/get-all-souvenirLikes/get-all-souvenirLikes.handler';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      SouvenirLikesEntity,
    ]),
  ],

  controllers: [
    SouvenirLikesAdminController,
    SouvenirLikesPublicController,
  ],

  providers: [
    CreateSouvenirLikesHandler,
    GetAllSouvenirLikesHandler,
    UpdateSouvenirLikesHandler,
    DeleteSouvenirLikesHandler,
    GetAllSouvenirLikesHandlerPub,
  ],
})
export class SouvenirLikesModule {}