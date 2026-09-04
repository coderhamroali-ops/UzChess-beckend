import { NotFoundException } from '@nestjs/common';
import { BookReviewsEntity } from '../../../entities/bookReviews.entities';

export class DeleteBookReviewsHandler {

  async execute(id: number) {

    const review = await BookReviewsEntity.findOneBy({
      id,
    });

    if (!review) {
      throw new NotFoundException(
        'Book review not found',
      );
    }

    return await BookReviewsEntity.remove(review);
  }
}