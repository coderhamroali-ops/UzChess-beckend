import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdateCourseSectionsRequest } from './update-courseSections.request';
import { CourseSectionsEntity } from '../../../entities/courseSections.entities';

@Injectable()
export class UpdateCourseSectionsHandler {

  async execute(
    id: number,
    payload: UpdateCourseSectionsRequest,
  ) {

    const section = await CourseSectionsEntity.findOneBy({
      id: id,
    });

    if (!section) {
      throw new NotFoundException(
        'Course section not found',
      );
    }

    const titleExists = await CourseSectionsEntity.exists({
      where: {
        id: Not(section.id),
        courseId: payload.courseId,
        title: payload.title,
      },
    });

    if (titleExists) {
      throw new ConflictException(
        'Course section title already exists',
      );
    }

    section.courseId = payload.courseId;
    section.title = payload.title;
    section.order = payload.order;
    section.date = new Date(payload.date);

    return await CourseSectionsEntity.save(section);
  }
}