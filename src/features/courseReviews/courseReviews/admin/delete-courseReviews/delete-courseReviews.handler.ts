import { NotFoundException } from '@nestjs/common';
import { CourseReviewsEntity } from '../../../entities/courseReviews.entities';

export class DeleteCourseReviewsHandler {

  async execute(id: number) {

    const review = await CourseReviewsEntity.findOneBy({
      id,
    });

    if (!review) {
      throw new NotFoundException(
        'Course review not found',
      );
    }

    return await CourseReviewsEntity.remove(review);
  }
}