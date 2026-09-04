import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdateSouvenirLikesRequest } from './update-souvenirLikes.request';
import { SouvenirLikesEntity } from '../../../entities/souvenirLikes.entities';

@Injectable()
export class UpdateSouvenirLikesHandler {

  async execute(
    id: number,
    payload: UpdateSouvenirLikesRequest,
  ) {

    const like = await SouvenirLikesEntity.findOneBy({
      id,
    });

    if (!like) {
      throw new NotFoundException(
        'Souvenir like not found',
      );
    }

    const likeExists = await SouvenirLikesEntity.exists({
      where: {
        id: Not(like.id),
        userId: payload.userId,
        souvenirId: payload.souvenirId,
      },
    });

    if (likeExists) {
      throw new ConflictException(
        'This user already liked this souvenir',
      );
    }

    like.userId = payload.userId;
    like.souvenirId = payload.souvenirId;

    return await SouvenirLikesEntity.save(like);
  }
}