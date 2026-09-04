import { NotFoundException } from '@nestjs/common';
import { CourseLessonsEntity } from '../../../entities/courseLessons.entities';

export class DeleteCourseLessonsHandler {

  async execute(id: number) {

    const lesson = await CourseLessonsEntity.findOneBy({
      id,
    });

    if (!lesson) {
      throw new NotFoundException(
        'Course lesson not found',
      );
    }

    return await CourseLessonsEntity.remove(lesson);
  }
}