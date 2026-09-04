import { Controller, Get, Query } from '@nestjs/common';
import { GetAllCourseLessonsHandlerPub } from './get-all-courseLessons/get-all-courseLessons.handler';
import { GetAllCourseLessonsRequest } from './get-all-courseLessons/get-all-courseLessons.request';


@Controller('public/course-lessons')
export class CourseLessonsPublicController {

  constructor(
    private getAllHandler: GetAllCourseLessonsHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllCourseLessonsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}