import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdateCourseLikesRequest } from './update-courseLikes.request';
import { CourseLikesEntity } from '../../../entities/courseLikes.entities';

@Injectable()
export class UpdateCourseLikesHandler {

  async execute(
    id: number,
    payload: UpdateCourseLikesRequest,
  ) {

    const like = await CourseLikesEntity.findOneBy({
      id,
    });

    if (!like) {
      throw new NotFoundException(
        'Course like not found',
      );
    }

    const likeExists = await CourseLikesEntity.exists({
      where: {
        id: Not(like.id),
        userId: payload.userId,
        courseId: payload.courseId,
      },
    });

    if (likeExists) {
      throw new ConflictException(
        'This user already liked this course',
      );
    }

    like.userId = payload.userId;
    like.courseId = payload.courseId;
    like.created = new Date(payload.created);

    return await CourseLikesEntity.save(like);
  }
}