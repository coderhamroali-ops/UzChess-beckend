import { Controller, Get, Query } from '@nestjs/common';
import { GetAllCourseSectionsHandlerPub } from './get-all-courseSections/get-all-courseSections.handler';
import { GetAllCourseSectionsRequest } from './get-all-courseSections/get-all-courseSections.request';


@Controller('public/course-sections')
export class CourseSectionsPublicController {

  constructor(
    private getAllHandler: GetAllCourseSectionsHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllCourseSectionsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}