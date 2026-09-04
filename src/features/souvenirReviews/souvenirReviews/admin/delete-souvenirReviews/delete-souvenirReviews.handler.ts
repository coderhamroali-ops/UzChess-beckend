import { Injectable, NotFoundException } from '@nestjs/common';
import { SouvenirReviewsEntity } from '../../../entities/souvenirReviews.entities';

@Injectable()
export class DeleteSouvenirReviewsHandler {

  async execute(id: number) {

    const review = await SouvenirReviewsEntity.findOneBy({
      id: id,
    });

    if (!review) {
      throw new NotFoundException(
        'Souvenir review not found',
      );
    }

    return await SouvenirReviewsEntity.remove(review);
  }
}