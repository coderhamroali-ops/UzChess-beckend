import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PurchasedCoursesEntity } from '../../../entities/purchasedCourses.entities';
import { CoursesEntities } from '../../../../courses/entities/courses.entities';
import { BuyCourseRequest } from './buy-course.request';

@Injectable()
export class BuyCourseHandler {

  async execute(userId: number, payload: BuyCourseRequest) {

    const course = await CoursesEntities.findOneBy({
      id: payload.courseId,
    });

    if (!course || !course.isPublished) {
      throw new NotFoundException('Course not found');
    }

    const alreadyPurchased = await PurchasedCoursesEntity.exists({
      where: {
        userId,
        courseId: payload.courseId,
      },
    });

    if (alreadyPurchased) {
      throw new ConflictException('You have already purchased this course');
    }

    const purchase = PurchasedCoursesEntity.create({
      userId,
      courseId: payload.courseId,
      isCompleted: false,
      date: new Date(),
    });

    return await PurchasedCoursesEntity.save(purchase);
  }
}