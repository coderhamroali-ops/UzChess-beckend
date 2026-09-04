import { NotFoundException } from '@nestjs/common';
import { DifficultiesEntities } from '../../../entities/difficulties.entities';

export class DeleteDifficultiesHandler {
  async execute(id: number) {
    const categories = await DifficultiesEntities.findOneBy({ id: id });
    if (!categories)
      throw new NotFoundException('Language');
    return await DifficultiesEntities.remove(categories);
  }
}