import { Module } from '@nestjs/common';
import { ReportCategoriesAdminController } from './reportCategories/admin/reportCategories.admin.controller';
import { ReportCategoriesPublicController } from './reportCategories/public/reportCategories-public.controller';
import {
  CreateReportCategoriesHandler,
} from './reportCategories/admin/create-reportCategories/create-reportCategories.handler';
import {
  GetAllReportCategoriesHandler,
} from './reportCategories/admin/get-all-reportCategories/get-all-reportCategories.handler';
import {
  UpdateReportCategoriesHandler,
} from './reportCategories/admin/update-reportCategories/update-reportCategories.handler';
import {
  DeleteReportCategoriesHandler,
} from './reportCategories/admin/delete-reportCategories/delete- reportCategories.handler';
import {
  GetAllReportCategoriesHandlerPub,
} from './reportCategories/public/get-all-reportCategories/get-all-reportCategories.handler';


@Module({
  controllers: [
    ReportCategoriesAdminController,
    ReportCategoriesPublicController,
  ],

  providers: [
    CreateReportCategoriesHandler,
    GetAllReportCategoriesHandler,
    UpdateReportCategoriesHandler,
    DeleteReportCategoriesHandler,

    GetAllReportCategoriesHandlerPub,
  ],
})
export class ReportCategoriesModule {
}