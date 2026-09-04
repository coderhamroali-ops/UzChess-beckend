import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdateSouvenirReviewsRequest } from './update-souvenirReviews.request';
import { SouvenirReviewsEntity } from '../../../entities/souvenirReviews.entities';


@Injectable()
export class UpdateSouvenirReviewsHandler {

  async execute(
    id: number,
    payload: UpdateSouvenirReviewsRequest,
  ) {

    const review = await SouvenirReviewsEntity.findOneBy({
      id: id,
    });

    if (!review) {
      throw new NotFoundException(
        'Souvenir review not found',
      );
    }

    const reviewExists = await SouvenirReviewsEntity.exists({
      where: {
        id: Not(review.id),
        userId: payload.userId,
        souvenirId: payload.souvenirId,
      },
    });

    if (reviewExists) {
      throw new ConflictException(
        'User already reviewed this souvenir',
      );
    }

    review.userId = payload.userId;
    review.souvenirId = payload.souvenirId;
    review.rating = payload.rating;
    review.comment = payload.comment;

    return await SouvenirReviewsEntity.save(review);
  }
}