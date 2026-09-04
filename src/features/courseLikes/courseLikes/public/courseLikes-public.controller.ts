import { Controller, Get, Query } from '@nestjs/common';
import { GetAllCourseLikesHandlerPub } from './get-all-courseLikes/get-all-courseLikes.handler';
import { GetAllCourseLikesRequest } from './get-all-courseLikes/get-all-courseLikes.request';



@Controller('public/course-likes')
export class CourseLikesPublicController {

  constructor(
    private getAllHandler: GetAllCourseLikesHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllCourseLikesRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}