import { Module } from '@nestjs/common';
import { DifficultiesAdminController } from './difficulties/admin/difficulties-admin.controller';
import { CreateDifficultiesHandler } from './difficulties/admin/create-difficulties/create-difficulties.handler';
import { GetAllDifficultiesHandler } from './difficulties/admin/get-all-difficulties/get-all-difficulties.handler';
import { UpdateDifficultiesHandler } from './difficulties/admin/update-difficulties/update-difficulties.handler';
import { DeleteDifficultiesHandler } from './difficulties/admin/delete-difficulties/delete-difficulties.handler';
import { GetAllDifficultiesHandlerP } from './difficulties/public/get-all-difficulties/get-all-difficulties.handler';
import { DifficultiesPublicController } from './difficulties/public/difficulties-public-controller';

@Module({
  controllers: [
    DifficultiesAdminController,
    DifficultiesPublicController,
  ],

  providers: [
    CreateDifficultiesHandler,
    GetAllDifficultiesHandler,
    UpdateDifficultiesHandler,
    DeleteDifficultiesHandler,
    GetAllDifficultiesHandlerP
  ]
})
export class DifficultiesModule {

}