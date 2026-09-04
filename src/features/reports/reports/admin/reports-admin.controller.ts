import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GetAllReportsHandler } from './get-all-reports/get-all-reports.handler';
import { CreateReportsHandler } from './create-reports/create-reports.handler';
import { UpdateReportsHandler } from './update-reports/update-reports.handler';
import { DeleteReportsHandler } from './delete-reports/delete-reports.handler';
import { CreateReportsRequest } from './create-reports/create-reports.request';
import { GetAllReportsRequest } from './get-all-reports/get-all-reports.request';
import { UpdateReportsRequest } from './update-reports/update-reports.request';




@Controller('admin/reports')
export class ReportsAdminController {

  constructor(
    private getAllHandler: GetAllReportsHandler,
    private createReport: CreateReportsHandler,
    private updateHandler: UpdateReportsHandler,
    private deleteHandler: DeleteReportsHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateReportsRequest,
  ) {
    return await this.createReport.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllReportsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateReportsRequest,
  ) {
    return await this.updateHandler.execute(
      id,
      payload,
    );
  }

  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.deleteHandler.execute(id);
  }
}