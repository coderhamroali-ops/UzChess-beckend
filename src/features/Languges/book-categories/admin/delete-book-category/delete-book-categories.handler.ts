import { Entitybook } from '../../../entities/book-category.entities';
import { NotFoundException } from '@nestjs/common';

export class DeleteBookCategoriesHandler {
  async execute(id: number) {
    const categories = await Entitybook.findOneBy({ id: id });
    if (!categories)
      throw new NotFoundException('Language');
    return await Entitybook.remove(categories);
  }
}