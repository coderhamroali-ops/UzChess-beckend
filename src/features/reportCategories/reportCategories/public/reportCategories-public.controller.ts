import { GetAllReportCategoriesHandlerPub } from './get-all-reportCategories/get-all-reportCategories.handler';
import { Controller, Get, Query } from '@nestjs/common';
import { GetAllReportCategoriesRequest } from './get-all-reportCategories/get-all-reportCategories.request';

@Controller('public/reportCategories')
export class ReportCategoriesPublicController {
  constructor(
    private getAllHandler: GetAllReportCategoriesHandlerPub,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllReportCategoriesRequest) {
    return await this.getAllHandler.execute(filter)
  }
}