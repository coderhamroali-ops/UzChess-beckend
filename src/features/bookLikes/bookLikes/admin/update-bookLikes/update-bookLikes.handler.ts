import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdateBookLikesRequest } from './update-bookLikes.request';
import { BookLikesEntity } from '../../../entities/bookLikes.entities';

@Injectable()
export class UpdateBookLikesHandler {

  async execute(
    id: number,
    payload: UpdateBookLikesRequest,
  ) {

    const like = await BookLikesEntity.findOneBy({
      id,
    });

    if (!like) {
      throw new NotFoundException(
        'Book like not found',
      );
    }

    const likeExists = await BookLikesEntity.exists({
      where: {
        id: Not(like.id),
        userId: payload.userId,
        bookId: payload.bookId,
      },
    });

    if (likeExists) {
      throw new ConflictException(
        'This user already liked this book',
      );
    }

    like.userId = payload.userId;
    like.bookId = payload.bookId;

    return await BookLikesEntity.save(like);
  }
}