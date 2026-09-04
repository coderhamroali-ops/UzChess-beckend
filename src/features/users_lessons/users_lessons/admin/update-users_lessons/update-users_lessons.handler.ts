import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UsersLessonsEntity } from '../../../entities/users_lessons.entities';
import { UpdateUsersLessonsRequest } from './update-users_lessons.request';


@Injectable()
export class UpdateUsersLessonsHandler {

  async execute(
    id: number,
    payload: UpdateUsersLessonsRequest,
  ) {

    const lesson = await UsersLessonsEntity.findOneBy({
      id,
    });

    if (!lesson) {
      throw new NotFoundException(
        'User lesson not found',
      );
    }

    const lessonExists = await UsersLessonsEntity.exists({
      where: {
        id: Not(lesson.id),
        userId: payload.userId,
        courseLessonId: payload.courseLessonId,
      },
    });

    if (lessonExists) {
      throw new ConflictException(
        'This user lesson already exists',
      );
    }

    lesson.userId = payload.userId;
    lesson.courseLessonId = payload.courseLessonId;
    lesson.stoppedAt = payload.stoppedAt;
    lesson.isCompleted = payload.isCompleted;

    return await UsersLessonsEntity.save(lesson);
  }
}