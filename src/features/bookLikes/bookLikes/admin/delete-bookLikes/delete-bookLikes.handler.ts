import { NotFoundException } from '@nestjs/common';
import { BookLikesEntity } from '../../../entities/bookLikes.entities';

export class DeleteBookLikesHandler {

  async execute(id: number) {

    const like = await BookLikesEntity.findOneBy({
      id,
    });

    if (!like) {
      throw new NotFoundException(
        'Book like not found',
      );
    }

    return await BookLikesEntity.remove(like);
  }
}