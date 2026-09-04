import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdateCourseReviewsRequest } from './update-courseReviews.request';
import { CourseReviewsEntity } from '../../../entities/courseReviews.entities';

@Injectable()
export class UpdateCourseReviewsHandler {

  async execute(
    id: number,
    payload: UpdateCourseReviewsRequest,
  ) {

    const review = await CourseReviewsEntity.findOneBy({
      id,
    });

    if (!review) {
      throw new NotFoundException(
        'Course review not found',
      );
    }

    const reviewExists = await CourseReviewsEntity.exists({
      where: {
        id: Not(review.id),
        userId: payload.userId,
        courseId: payload.courseId,
      },
    });

    if (reviewExists) {
      throw new ConflictException(
        'This user already reviewed this course',
      );
    }

    review.userId = payload.userId;
    review.courseId = payload.courseId;
    review.rating = payload.rating;
    review.comment = payload.comment;
    review.created = new Date(payload.created);

    return await CourseReviewsEntity.save(review);
  }
}