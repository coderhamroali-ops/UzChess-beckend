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
import { GetAllCourseReviewsHandler } from './get-all-courseReviews/get-all-courseReviews.handler';
import { CreateCourseReviewsHandler } from './create-courseReviews/create-courseReviews.handler';
import { UpdateCourseReviewsHandler } from './update-courseReviews/update-courseReviews.handler';
import { DeleteCourseReviewsHandler } from './delete-courseReviews/delete-courseReviews.handler';
import { CreateCourseReviewsRequest } from './create-courseReviews/create-courseReviews.request';
import { GetAllCourseReviewsRequest } from './get-all-courseReviews/get-all-courseReviews.request';
import { UpdateCourseReviewsRequest } from './update-courseReviews/update-courseReviews.request';



@Controller('admin/course-reviews')
export class CourseReviewsAdminController {

  constructor(
    private getAllHandler: GetAllCourseReviewsHandler,
    private createReview: CreateCourseReviewsHandler,
    private updateHandler: UpdateCourseReviewsHandler,
    private deleteHandler: DeleteCourseReviewsHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateCourseReviewsRequest,
  ) {
    return await this.createReview.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllCourseReviewsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCourseReviewsRequest,
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