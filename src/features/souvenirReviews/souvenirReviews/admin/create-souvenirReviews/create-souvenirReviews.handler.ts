import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateSouvenirReviewsRequest } from './create-souvenirReviews.request';
import { SouvenirReviewsEntity } from '../../../entities/souvenirReviews.entities';


@Injectable()
export class CreateSouvenirReviewsHandler {

  async execute(payload: CreateSouvenirReviewsRequest) {

    const reviewExists = await SouvenirReviewsEntity.exists({
      where: {
        userId: payload.userId,
        souvenirId: payload.souvenirId,
      },
    });

    if (reviewExists) {
      throw new ConflictException(
        'User already reviewed this souvenir',
      );
    }

    const newReview = SouvenirReviewsEntity.create({
      userId: payload.userId,
      souvenirId: payload.souvenirId,
      rating: payload.rating,
      comment: payload.comment,
    });

    return await SouvenirReviewsEntity.save(newReview);
  }
}