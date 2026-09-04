import { ILike, Not } from 'typeorm';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCourseCategoriesRequest } from './update-courseCategories.request';
import { CourseCategoriesEntities } from '../../../entities/courseCategories.entities';

@Injectable()
export class UpdateCourseCategoriesHandler {
  async execute(id: number, payload: UpdateCourseCategoriesRequest) {
    const category = await CourseCategoriesEntities.findOneBy({ id: id });

    if (!category) {
      throw new NotFoundException('Book category not found');
    }

    const titleExists = await CourseCategoriesEntities.exists({
      where: { id: Not(category.id), title: ILike(payload.title) },
    });

    if (titleExists) {
      throw new ConflictException('Title');
    }

    category.title = payload.title;

    return await CourseCategoriesEntities.save(category);
  }
}