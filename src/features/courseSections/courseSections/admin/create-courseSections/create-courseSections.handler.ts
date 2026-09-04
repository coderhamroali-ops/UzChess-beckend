import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCourseSectionsRequest } from './create-courseSections.request';
import { CourseSectionsEntity } from '../../../entities/courseSections.entities';


@Injectable()
export class CreateCourseSectionsHandler {

  async execute(payload: CreateCourseSectionsRequest) {

    const titleExists = await CourseSectionsEntity.exists({
      where: {
        courseId: payload.courseId,
        title: payload.title,
      },
    });

    if (titleExists) {
      throw new ConflictException(
        'Course section title already exists',
      );
    }

    const newSection = CourseSectionsEntity.create({
      courseId: payload.courseId,
      title: payload.title,
      order: payload.order,
      date: payload.date,
    });

    return await CourseSectionsEntity.save(newSection);
  }
}