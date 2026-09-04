import { NotFoundException } from '@nestjs/common';
import { CourseLikesEntity } from '../../../entities/courseLikes.entities';

export class DeleteCourseLikesHandler {

  async execute(id: number) {

    const like = await CourseLikesEntity.findOneBy({
      id,
    });

    if (!like) {
      throw new NotFoundException(
        'Course like not found',
      );
    }

    return await CourseLikesEntity.remove(like);
  }
}