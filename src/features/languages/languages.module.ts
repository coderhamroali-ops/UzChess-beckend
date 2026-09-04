import { Module } from '@nestjs/common';
import { LanguagesAdminController } from './languages/admin/languages-admin.controller';
import { CreateLanguagesHandler } from './languages/admin/create-languages/create-languages.handler';
import { UpdateLanguagesHandler } from './languages/admin/update-languages/update-Languages.handler';
import { GetAllLanguagesHandler } from './languages/admin/get-all-languages/get-all-Languages-handler';
import { DeleteLanguagesHandler } from './languages/admin/delete-languages/delete-Languages.handler';
import { GetAllLanguagesHandlerpublic } from './languages/public/get-all-languages/get-all-Languages-handler';
import { LanguagesPublicController } from './languages/public/Languages-public.controller';

@Module({
  controllers: [
    LanguagesAdminController,
    LanguagesPublicController,
  ],

  providers: [
    CreateLanguagesHandler,
    GetAllLanguagesHandler,
    UpdateLanguagesHandler,
    DeleteLanguagesHandler,
    GetAllLanguagesHandlerpublic,
  ]
})
export class LanguagesModule {

}