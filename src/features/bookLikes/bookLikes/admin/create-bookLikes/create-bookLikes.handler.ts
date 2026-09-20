import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateBookLikesRequest } from './create-bookLikes.request';
import { BookLikesEntity } from '../../../entities/bookLikes.entities';

@Injectable()
export class CreateBookLikesHandler {

  async execute(payload: CreateBookLikesRequest) {

    const likeExists = await BookLikesEntity.exists({
      where: {
        userId: payload.userId,
        bookId: payload.bookId,
      },
    });

    if (likeExists) {
      throw new ConflictException(
        'This user already liked this book',
      );
    }

    const newLike = BookLikesEntity.create({
      userId: payload.userId,
      bookId: payload.bookId,
    });

    return await BookLikesEntity.save(newLike);
  }
}

