import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateUsersLessonsRequest } from './create-users_lessons.request';
import { UsersLessonsEntity } from '../../../entities/users_lessons.entities';


@Injectable()
export class CreateUsersLessonsHandler {

  async execute(payload: CreateUsersLessonsRequest) {

    const lessonExists = await UsersLessonsEntity.exists({
      where: {
        userId: payload.userId,
        courseLessonId: payload.courseLessonId,
      },
    });

    if (lessonExists) {
      throw new ConflictException(
        'This user lesson already exists',
      );
    }

    const newLesson = UsersLessonsEntity.create({
      userId: payload.userId,
      courseLessonId: payload.courseLessonId,
      stoppedAt: payload.stoppedAt,
      isCompleted: payload.isCompleted,
    });

    return await UsersLessonsEntity.save(newLesson);
  }
}