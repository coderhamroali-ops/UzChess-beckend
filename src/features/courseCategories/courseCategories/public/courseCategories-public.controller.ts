import { GetAllCourseCategoriesHandlerP } from './get-all-courseCategories/get-all-courseCategories.handler';
import { Controller, Get, Query } from '@nestjs/common';
import { GetAllCourseCategoriesRequest } from './get-all-courseCategories/get-all-courseCategories.request';
@Controller('public/courseCategories')

export class CourseCategoriesPublicController {
  constructor(
    private getAllHandler: GetAllCourseCategoriesHandlerP,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllCourseCategoriesRequest) {
    return await this.getAllHandler.execute(filter);
  }
}