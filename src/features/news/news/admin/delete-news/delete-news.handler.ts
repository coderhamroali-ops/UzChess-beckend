import { NotFoundException } from '@nestjs/common';
import { NewsEntities } from '../../../entities/news.entities';

export class DeleteNewsHandler {
  async execute(id: number) {
    const categories = await NewsEntities.findOneBy({ id: id });
    if (!categories)
      throw new NotFoundException('Language');
    return await NewsEntities.remove(categories);
  }
}