import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateCourseReviewsRequest } from './create-courseReviews.request';
import { CourseReviewsEntity } from '../../../entities/courseReviews.entities';

@Injectable()
export class CreateCourseReviewsHandler {

  async execute(payload: CreateCourseReviewsRequest) {

    const reviewExists = await CourseReviewsEntity.exists({
      where: {
        userId: payload.userId,
        courseId: payload.courseId,
      },
    });

    if (reviewExists) {
      throw new ConflictException(
        'This user already reviewed this course',
      );
    }

    const newReview = CourseReviewsEntity.create({
      userId: payload.userId,
      courseId: payload.courseId,
      rating: payload.rating,
      comment: payload.comment,
      created: new Date(payload.created),
    });

    return await CourseReviewsEntity.save(newReview);
  }
}