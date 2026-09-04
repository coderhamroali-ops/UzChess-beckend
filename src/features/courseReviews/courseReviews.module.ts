import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseReviewsEntity } from './entities/courseReviews.entities';
import { CourseReviewsAdminController } from './courseReviews/admin/courseReviews-admin.controller';
import { CourseReviewsPublicController } from './courseReviews/public/courseReviews-public.controller';
import { CreateCourseReviewsHandler } from './courseReviews/admin/create-courseReviews/create-courseReviews.handler';
import { GetAllCourseReviewsHandler } from './courseReviews/admin/get-all-courseReviews/get-all-courseReviews.handler';
import {
  GetAllCourseReviewsHandlerPub
} from './courseReviews/public/get-all-courseReviews/get-all-courseReviews.handler';
import { UpdateCourseReviewsHandler } from './courseReviews/admin/update-courseReviews/update-courseReviews.handler';
import { DeleteCourseReviewsHandler } from './courseReviews/admin/delete-courseReviews/delete-courseReviews.handler';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      CourseReviewsEntity,
    ]),
  ],

  controllers: [
    CourseReviewsAdminController,
    CourseReviewsPublicController,
  ],

  providers: [
    CreateCourseReviewsHandler,
    GetAllCourseReviewsHandler,
    GetAllCourseReviewsHandlerPub,
    UpdateCourseReviewsHandler,
    DeleteCourseReviewsHandler,
  ],
})
export class CourseReviewsModule {}