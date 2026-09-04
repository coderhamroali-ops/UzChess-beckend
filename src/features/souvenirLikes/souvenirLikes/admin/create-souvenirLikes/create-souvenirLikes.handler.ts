import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateSouvenirLikesRequest } from './create-souvenirLikes.request';
import { SouvenirLikesEntity } from '../../../entities/souvenirLikes.entities';

@Injectable()
export class CreateSouvenirLikesHandler {

  async execute(payload: CreateSouvenirLikesRequest) {

    const likeExists = await SouvenirLikesEntity.exists({
      where: {
        userId: payload.userId,
        souvenirId: payload.souvenirId,
      },
    });

    if (likeExists) {
      throw new ConflictException(
        'User already liked this souvenir',
      );
    }

    const newLike = SouvenirLikesEntity.create({
      userId: payload.userId,
      souvenirId: payload.souvenirId,
    });

    return await SouvenirLikesEntity.save(newLike);
  }
}