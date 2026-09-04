import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateCourseLikesRequest } from './create-courseLikes.request';
import { CourseLikesEntity } from '../../../entities/courseLikes.entities';

@Injectable()
export class CreateCourseLikesHandler {

  async execute(payload: CreateCourseLikesRequest) {

    const likeExists = await CourseLikesEntity.exists({
      where: {
        userId: payload.userId,
        courseId: payload.courseId,
      },
    });

    if (likeExists) {
      throw new ConflictException(
        'This user already liked this course',
      );
    }

    const newLike = CourseLikesEntity.create({
      userId: payload.userId,
      courseId: payload.courseId,
      created: new Date(payload.created),
    });

    return await CourseLikesEntity.save(newLike);
  }
}