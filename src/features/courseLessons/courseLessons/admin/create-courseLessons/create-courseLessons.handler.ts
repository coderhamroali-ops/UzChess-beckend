import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateCourseLessonsRequest } from './create-courseLessons.request';
import { CourseLessonsEntity } from '../../../entities/courseLessons.entities';

@Injectable()
export class CreateCourseLessonsHandler {

  async execute(payload: CreateCourseLessonsRequest) {

    const lessonExists = await CourseLessonsEntity.exists({
      where: {
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

    const newLesson = CourseLessonsEntity.create({
      courseId: payload.courseId,
      courseSectionId: payload.courseSectionId,
      title: payload.title,
      content: payload.content,
      thumbnail: payload.thumbnail,
      video: payload.video,
      order: payload.order,
      date: payload.date,
      isFree: payload.isFree,
    });

    return await CourseLessonsEntity.save(newLesson);
  }
}