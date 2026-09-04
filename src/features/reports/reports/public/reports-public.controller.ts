import { Controller, Get, Query } from '@nestjs/common';
import { GetAllReportsHandlerPub } from './get-all-reports/get-all-reports.handler';
import { GetAllReportsRequest } from './get-all-reports/get-all-reports.request';



@Controller('public/reports')
export class ReportsPublicController {

  constructor(
    private getAllHandler: GetAllReportsHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllReportsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}