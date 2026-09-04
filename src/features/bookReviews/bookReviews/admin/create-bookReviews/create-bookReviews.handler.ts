import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateBookReviewsRequest } from './create-bookReviews.request';
import { BookReviewsEntity } from '../../../entities/bookReviews.entities';

@Injectable()
export class CreateBookReviewsHandler {

  async execute(payload: CreateBookReviewsRequest) {

    const reviewExists = await BookReviewsEntity.exists({
      where: {
        userId: payload.userId,
        bookId: payload.bookId,
      },
    });

    if (reviewExists) {
      throw new ConflictException(
        'This user already reviewed this book',
      );
    }

    const newReview = BookReviewsEntity.create({
      userId: payload.userId,
      bookId: payload.bookId,
      rating: payload.rating,
      comment: payload.comment,
    });

    return await BookReviewsEntity.save(newReview);
  }
}