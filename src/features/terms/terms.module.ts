import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TermsEntity } from './entities/terms.entities';
import { TermsAdminController } from './terms/admin/terms-admin.controller';
import { TermsPublicController } from './terms/public/terms-public.controller';
import { CreateTermsHandler } from './terms/admin/create-terms/create-terms.handler';
import { GetAllTermsHandler } from './terms/admin/get-all-terms/get-all-terms.handler';
import { GetAllTermsHandlerPub } from './terms/public/get-all-terms/get-all-terms.handler';
import { UpdateTermsHandler } from './terms/admin/update-terms/update-terms.handler';
import { DeleteTermsHandler } from './terms/admin/delete-terms/delete-terms.handler';



@Module({
  imports: [
    TypeOrmModule.forFeature([
      TermsEntity,
    ]),
  ],

  controllers: [
    TermsAdminController,
    TermsPublicController,
  ],

  providers: [
    CreateTermsHandler,
    GetAllTermsHandler,
    GetAllTermsHandlerPub,
    UpdateTermsHandler,
    DeleteTermsHandler,
  ],
})
export class TermsModule {}