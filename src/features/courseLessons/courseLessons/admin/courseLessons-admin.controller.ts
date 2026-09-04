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
import { GetAllCourseLessonsHandler } from './get-all-courseLessons/get-all-courseLessons.handler';
import { CreateCourseLessonsHandler } from './create-courseLessons/create-courseLessons.handler';
import { UpdateCourseLessonsHandler } from './update-courseLessons/update-courseLessons.handler';
import { DeleteCourseLessonsHandler } from './delete-courseLessons/delete-courseLessons.handler';
import { CreateCourseLessonsRequest } from './create-courseLessons/create-courseLessons.request';
import { GetAllCourseLessonsRequest } from './get-all-courseLessons/get-all-courseLessons.request';
import { UpdateCourseLessonsRequest } from './update-courseLessons/update-courseLessons.request';




@Controller('admin/course-lessons')
export class CourseLessonsAdminController {

  constructor(
    private getAllHandler: GetAllCourseLessonsHandler,
    private createLesson: CreateCourseLessonsHandler,
    private updateHandler: UpdateCourseLessonsHandler,
    private deleteHandler: DeleteCourseLessonsHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateCourseLessonsRequest,
  ) {
    return await this.createLesson.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllCourseLessonsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCourseLessonsRequest,
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