import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateCourseCategoriesRequest } from './admin/create-courseCategories/create-courseCategories.request';
import { CreateCourseCategoriesHandler } from './admin/create-courseCategories/create-courseCategories.handler';
import { GetAllCourseCategoriesRequest } from './admin/get-all-courseCategories/get-all-courseCategories.request';
import { GetAllCourseCategoriesHandler } from './admin/get-all-courseCategories/get-all-courseCategories.handler';
import { UpdateCourseCategoriesRequest } from './admin/update-courseCategories/update-courseCategories.request';
import { UpdateCourseCategoriesHandler } from './admin/update-courseCategories/update-courseCategories.handler';
import { DeleteCourseCategoriesHandler } from './admin/delete-courseCategories/delete-courseCategories.handler';

@Controller('admin/courseCategories')
export class CourseCategoriesAdminController {
  constructor(
    private createHandler: CreateCourseCategoriesHandler,
    private getAllHandler: GetAllCourseCategoriesHandler,
    private updateHandler: UpdateCourseCategoriesHandler,
    private deleteHandler: DeleteCourseCategoriesHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateCourseCategoriesRequest) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllCourseCategoriesRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateCourseCategoriesRequest) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }

}