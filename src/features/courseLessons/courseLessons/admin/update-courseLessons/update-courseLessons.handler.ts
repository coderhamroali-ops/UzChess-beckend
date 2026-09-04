import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdateCourseLessonsRequest } from './update-courseLessons.request';
import { CourseLessonsEntity } from '../../../entities/courseLessons.entities';

@Injectable()
export class UpdateCourseLessonsHandler {

  async execute(
    id: number,
    payload: UpdateCourseLessonsRequest,
  ) {

    const lesson = await CourseLessonsEntity.findOneBy({
      id,
    });

    if (!lesson) {
      throw new NotFoundException(
        'Course lesson not found',
      );
    }

    const lessonExists = await CourseLessonsEntity.exists({
      where: {
        id: Not(lesson.id),
        courseId: payload.courseId,
        courseSectionId: payload.courseSectionId,
        title: payload.title,
      },
    });

    if (lessonExists) {
      throw new ConflictException(
        'Course lesson already exists',
      );
    }

    lesson.courseId = payload.courseId;
    lesson.courseSectionId = payload.courseSectionId;
    lesson.title = payload.title;
    lesson.content = payload.content;
    lesson.thumbnail = payload.thumbnail;
    lesson.video = payload.video;
    lesson.order = payload.order;
    lesson.date = payload.date;
    lesson.isFree = payload.isFree;

    return await CourseLessonsEntity.save(lesson);
  }
}