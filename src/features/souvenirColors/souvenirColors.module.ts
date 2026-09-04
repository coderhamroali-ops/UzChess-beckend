import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SouvenirColorsEntity } from './entities/souvenirColors.entities';
import { SouvenirColorsAdminController } from './souvenirColors/admin/souvenirColors.admin.controller';
import { SouvenirColorsPublicController } from './souvenirColors/public/souvenirColors.public.controller';
import {
  CreateSouvenirColorsHandler
} from './souvenirColors/admin/create-souvenirColors/create-souvenirColors.handler';
import {
  GetAllSouvenirColorsHandler
} from './souvenirColors/admin/get-all-souvenirColors/get-all-souvenirColors.handlet';
import {
  GetAllSouvenirColorsHandlerPub
} from './souvenirColors/public/get-all-souvenirColors/get-all-souvenirColors.handlet';
import {
  UpdateSouvenirColorsHandler
} from './souvenirColors/admin/update-souvenirColors/update-souvenirColors.handler';
import {
  DeleteSouvenirColorsHandler
} from './souvenirColors/admin/delete-souvenirColors/delete-souvenirColors.handler';



@Module({
  imports: [
    TypeOrmModule.forFeature([
      SouvenirColorsEntity,
    ]),
  ],

  controllers: [
    SouvenirColorsAdminController,
    SouvenirColorsPublicController,
  ],

  providers: [
    CreateSouvenirColorsHandler,
    GetAllSouvenirColorsHandler,
    GetAllSouvenirColorsHandlerPub,
    UpdateSouvenirColorsHandler,
    DeleteSouvenirColorsHandler,
  ],
})
export class SouvenirColorsModule {}