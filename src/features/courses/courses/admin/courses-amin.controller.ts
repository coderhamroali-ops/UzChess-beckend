import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateCoursesRequest } from './create-courses/create-courses.request';
import { CreateCoursesHandler } from './create-courses/create-courses.handler';
import { GetAllCoursesHandler } from './get-all-courses/get-all-courses.handler';
import { GetAllCoursesRequest } from './get-all-courses/get-all-courses.request';
import { UpdateCoursesRequest } from './update-courses/update-courses.request';
import { UpdateCoursesHandler } from './update-courses/update-courses.handler';
import { DeleteCoursesHandler } from './delete-courses/delete-courses.handler';

@Controller('admin/courses')
export class CoursesAminController {

  constructor(
    private createHandler: CreateCoursesHandler,
    private getAllHandler: GetAllCoursesHandler,
    private updateHandler: UpdateCoursesHandler,
    private deleteHandler: DeleteCoursesHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateCoursesRequest) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllCoursesRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, payload: UpdateCoursesRequest) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }
}