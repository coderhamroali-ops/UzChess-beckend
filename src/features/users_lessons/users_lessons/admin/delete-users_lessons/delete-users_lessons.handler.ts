import { NotFoundException } from '@nestjs/common';
import { UsersLessonsEntity } from '../../../entities/users_lessons.entities';

export class DeleteUsersLessonsHandler {

  async execute(id: number) {

    const lesson = await UsersLessonsEntity.findOneBy({
      id,
    });

    if (!lesson) {
      throw new NotFoundException(
        'User lesson not found',
      );
    }

    return await UsersLessonsEntity.remove(lesson);
  }
}