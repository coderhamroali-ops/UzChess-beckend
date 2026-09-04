import { NotFoundException } from '@nestjs/common';
import { SouvenirLikesEntity } from '../../../entities/souvenirLikes.entities';


export class DeleteSouvenirLikesHandler {

  async execute(id: number) {

    const like = await SouvenirLikesEntity.findOneBy({
      id,
    });

    if (!like) {
      throw new NotFoundException(
        'Souvenir like not found',
      );
    }

    return await SouvenirLikesEntity.remove(like);
  }
}