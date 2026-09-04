import { NotFoundException } from '@nestjs/common';
import { CourseCategoriesEntities } from '../../../entities/courseCategories.entities';

export class DeleteCourseCategoriesHandler {
  async execute(id: number) {
    const categories = await CourseCategoriesEntities.findOneBy({ id: id });
    if (!categories)
      throw new NotFoundException('Language');
    return await CourseCategoriesEntities.remove(categories);
  }
}