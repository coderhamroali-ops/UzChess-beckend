import { NotFoundException } from '@nestjs/common';
import { LanguagesEntities } from '../../../entities/languages.entities';

export class DeleteLanguagesHandler {
  async execute(id: number) {
    const categories = await LanguagesEntities.findOneBy({ id: id });
    if (!categories)
      throw new NotFoundException('Language');
    return await LanguagesEntities.remove(categories);
  }
}