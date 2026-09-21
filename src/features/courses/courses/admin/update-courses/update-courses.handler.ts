import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Not } from 'typeorm';
import { UpdateCoursesRequest } from './update-courses.request';
import { CoursesEntities } from '../../../entities/courses.entities';

@Injectable()
export class UpdateCoursesHandler {
  async execute(id: number, payload: UpdateCoursesRequest) {
    const category = await CoursesEntities.findOneBy({id: id});

    if (!category) {
      throw new NotFoundException('courses category not found');
    }

    const titleExists = await CoursesEntities.exists({
      where: { id: Not(category.id), title: ILike(payload.title)},
    });

    if (titleExists) {
      throw new ConflictException('Title');
    }

    category.title = payload.title;

    return await CoursesEntities.save(category);
  }
}