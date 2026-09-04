import { NotFoundException } from '@nestjs/common';
import { CourseSectionsEntity } from '../../../entities/courseSections.entities';

export class DeleteCourseSectionsHandler {

  async execute(id: number) {

    const section = await CourseSectionsEntity.findOneBy({
      id: id,
    });

    if (!section) {
      throw new NotFoundException(
        'Course section not found',
      );
    }

    return await CourseSectionsEntity.remove(section);
  }
}