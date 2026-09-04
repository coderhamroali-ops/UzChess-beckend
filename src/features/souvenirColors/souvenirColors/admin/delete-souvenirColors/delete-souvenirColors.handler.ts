import { NotFoundException } from '@nestjs/common';
import { SouvenirColorsEntity } from '../../../entities/souvenirColors.entities';

export class DeleteSouvenirColorsHandler {

  async execute(id: number) {

    const souvenirColor = await SouvenirColorsEntity.findOneBy({
      id: id,
    });

    if (!souvenirColor) {
      throw new NotFoundException(
        'Souvenir color not found',
      );
    }

    return await SouvenirColorsEntity.remove(
      souvenirColor,
    );
  }
}