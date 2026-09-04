import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdateBookReviewsRequest } from './update-bookReviews.request';
import { BookReviewsEntity } from '../../../entities/bookReviews.entities';

@Injectable()
export class UpdateBookReviewsHandler {

  async execute(
    id: number,
    payload: UpdateBookReviewsRequest,
  ) {

    const review = await BookReviewsEntity.findOneBy({
      id,
    });

    if (!review) {
      throw new NotFoundException(
        'Book review not found',
      );
    }

    const reviewExists = await BookReviewsEntity.exists({
      where: {
        id: Not(review.id),
        userId: payload.userId,
        bookId: payload.bookId,
      },
    });

    if (reviewExists) {
      throw new ConflictException(
        'This user already reviewed this book',
      );
    }

    review.userId = payload.userId;
    review.bookId = payload.bookId;
    review.rating = payload.rating;
    review.comment = payload.comment;

    return await BookReviewsEntity.save(review);
  }
}