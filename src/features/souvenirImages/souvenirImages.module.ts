import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SouvenirImagesEntity } from './entities/souvenirImages.entities';
import { SouvenirImagesAdminController } from './souvenirImages/admin/souvenirImages-admin.controller';
import { SouvenirImagesPublicController } from './souvenirImages/public/souvenirImages-public.controller';
import {
  CreateSouvenirImagesHandler
} from './souvenirImages/admin/create-souvenirImages/create-souvenirImages.handler';
import {
  GetAllSouvenirImagesHandler
} from './souvenirImages/admin/get-all-souvenirImages/get-all-souvenirImages.handler';
import {
  GetAllSouvenirImagesHandlerPub
} from './souvenirImages/public/get-all-souvenirImages/get-all-souvenirImages.handler';
import {
  UpdateSouvenirImagesHandler
} from './souvenirImages/admin/update-souvenirImages/update-souvenirImages.handler';
import {
  DeleteSouvenirImagesHandler
} from './souvenirImages/admin/delete-souvenirImages/delete-souvenirImages.handler';



@Module({
  imports: [
    TypeOrmModule.forFeature([
      SouvenirImagesEntity,
    ]),
  ],

  controllers: [
    SouvenirImagesAdminController,
    SouvenirImagesPublicController,
  ],

  providers: [
    CreateSouvenirImagesHandler,
    GetAllSouvenirImagesHandler,
    GetAllSouvenirImagesHandlerPub,
    UpdateSouvenirImagesHandler,
    DeleteSouvenirImagesHandler,
  ],
})
export class SouvenirImagesModule {}