import { ColorsEntities } from '../../../entities/colors.entities';
import { NotFoundException } from '@nestjs/common';

export class DeleteColorsHandler {
  async execute(id: number) {
    const categories = await ColorsEntities.findOneBy({ id: id });
    if (!categories)
      throw new NotFoundException('Colors');
    return await ColorsEntities.remove(categories);
  }
}