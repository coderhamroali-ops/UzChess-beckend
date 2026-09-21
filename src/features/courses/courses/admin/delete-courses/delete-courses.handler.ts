import { NotFoundException } from '@nestjs/common';
import { CoursesEntities } from '../../../entities/courses.entities';

export class DeleteCoursesHandler {
  async execute(id: number) {
    const categories = await CoursesEntities.findOneBy({ id: id });
    if (!categories)
      throw new NotFoundException('Courses');
    return await CoursesEntities.remove(categories);
  }
}