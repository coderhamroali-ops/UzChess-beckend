import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, } from '@nestjs/common';
import { CreateReportCategoriesHandler } from './create-reportCategories/create-reportCategories.handler';
import { GetAllReportCategoriesHandler } from './get-all-reportCategories/get-all-reportCategories.handler';
import { UpdateReportCategoriesHandler } from './update-reportCategories/update-reportCategories.handler';
import { DeleteReportCategoriesHandler } from './delete-reportCategories/delete- reportCategories.handler';
import { CreateReportCategoriesRequest } from './create-reportCategories/create-reportCategories.request';
import { PaginationFilters } from '../../../common/pagination.filter';
import { UpdateReportCategoriesRequest } from './update-reportCategories/update-reportCategories.request';


@Controller('admin/report-categories')
export class ReportCategoriesAdminController {
  constructor(
    private readonly createReportCategoriesHandler: CreateReportCategoriesHandler,
    private readonly getAllReportCategoriesHandler: GetAllReportCategoriesHandler,
    private readonly updateReportCategoriesHandler: UpdateReportCategoriesHandler,
    private readonly deleteReportCategoriesHandler: DeleteReportCategoriesHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateReportCategoriesRequest,
  ) {
    return this.createReportCategoriesHandler.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() query: PaginationFilters,
  ) {
    return this.getAllReportCategoriesHandler.execute(query);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateReportCategoriesRequest,
  ) {
    return this.updateReportCategoriesHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.deleteReportCategoriesHandler.execute(id);
  }
}