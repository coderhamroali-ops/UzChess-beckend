import { Controller, Get, Query } from '@nestjs/common';
import { GetAllCourseReviewsHandlerPub } from './get-all-courseReviews/get-all-courseReviews.handler';
import { GetAllCourseReviewsRequest } from './get-all-courseReviews/get-all-courseReviews.request';



@Controller('public/course-reviews')
export class CourseReviewsPublicController {

  constructor(
    private getAllHandler: GetAllCourseReviewsHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllCourseReviewsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}