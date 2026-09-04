import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsEntity } from './entities/reports.entities';
import { ReportsAdminController } from './reports/admin/reports-admin.controller';
import { ReportsPublicController } from './reports/public/reports-public.controller';
import { CreateReportsHandler } from './reports/admin/create-reports/create-reports.handler';
import { GetAllReportsHandler } from './reports/admin/get-all-reports/get-all-reports.handler';
import { GetAllReportsHandlerPub } from './reports/public/get-all-reports/get-all-reports.handler';
import { UpdateReportsHandler } from './reports/admin/update-reports/update-reports.handler';
import { DeleteReportsHandler } from './reports/admin/delete-reports/delete-reports.handler';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReportsEntity,
    ]),
  ],

  controllers: [
    ReportsAdminController,
    ReportsPublicController,
  ],

  providers: [
    CreateReportsHandler,
    GetAllReportsHandler,
    GetAllReportsHandlerPub,
    UpdateReportsHandler,
    DeleteReportsHandler,
  ],
})
export class ReportsModule {}