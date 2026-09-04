import { Module } from '@nestjs/common';
import { SouvenirsController } from './souvenirs/admin/souvenirs.admin.controller';
import { CreateSouvenirsHandler } from './souvenirs/admin/create-souvenirs/create-souvenirs.handler';
import { GetAllSouvenirsHandler } from './souvenirs/admin/get-all-souvenirs/get-all-souvenirs.handler';
import { UpdateSouvenirsHandler } from './souvenirs/admin/update-souvenirs/update-souvenirs.handler';
import { DeleteSouvenirsHandler } from './souvenirs/admin/delete-souvenirs/delete-souvenirs.handler';
import { GetAllSouvenirsHandlerPub } from './souvenirs/public/get-all-souvenirs/get-all-souvenirs.handler';
import { SouvenirsPublicController } from './souvenirs/public/souvenirs-public.controller';



@Module({
  controllers: [
    SouvenirsController,
    SouvenirsPublicController
  ],
  providers: [
    CreateSouvenirsHandler,
    GetAllSouvenirsHandler,
    UpdateSouvenirsHandler,
    DeleteSouvenirsHandler,
    GetAllSouvenirsHandlerPub
  ],
})
export class SouvenirsModule {}