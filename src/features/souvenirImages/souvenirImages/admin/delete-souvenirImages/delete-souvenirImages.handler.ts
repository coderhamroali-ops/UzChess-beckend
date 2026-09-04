import { NotFoundException } from '@nestjs/common';
import { SouvenirImagesEntity } from '../../../entities/souvenirImages.entities';

export class DeleteSouvenirImagesHandler {

  async execute(id: number) {

    const souvenirImage = await SouvenirImagesEntity.findOneBy({
      id: id,
    });

    if (!souvenirImage) {
      throw new NotFoundException(
        'Souvenir image not found',
      );
    }

    return await SouvenirImagesEntity.remove(
      souvenirImage,
    );
  }
}