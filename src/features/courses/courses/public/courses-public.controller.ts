import { Controller, Get, Query } from '@nestjs/common';
import { GetAllCoursesRequest } from './get-all-courses/get-all-courses.request';
import { GetAllCoursesHandlerP } from './get-all-courses/get-all-courses.handler';

@Controller('public/courses')
export class CoursesPublicController {

  constructor(
    private getAllHandler: GetAllCoursesHandlerP,
  ) {
  }

  @Get('lise')
  async getAll(@Query() filter: GetAllCoursesRequest) {
    return await this.getAllHandler.execute(filter)
  }
}