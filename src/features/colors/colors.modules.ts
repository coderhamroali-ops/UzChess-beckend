import { Module } from '@nestjs/common';
import { ColorsAdminController } from './colors/admin/colors-admin.controller';
import { CreateColorsHandler } from './colors/admin/create-colers/create-colors.handler';
import { GetAllColorsHandler } from './colors/admin/get-all-colors/get-all-colors.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorsEntities } from './entities/colors.entities';
import { UpdateColorsHandler } from './colors/admin/update-colors/update-colors.handler';
import { DeleteColorsHandler } from './colors/admin/delete-colors/delete-colors.handler';
import { ColorsPublicController } from './colors/public/colors-public.controller';
import { GetAllColorsHandlerP } from './colors/public/get-all-colors/get-all-colors.handler';

@Module({
  imports: [TypeOrmModule.forFeature([ColorsEntities]),],

  controllers: [
    ColorsAdminController,
    ColorsPublicController,
  ],
  providers: [
    CreateColorsHandler,
    GetAllColorsHandler,
    UpdateColorsHandler,
    DeleteColorsHandler,
    GetAllColorsHandlerP,
  ]
})
export class ColorsModules {

}