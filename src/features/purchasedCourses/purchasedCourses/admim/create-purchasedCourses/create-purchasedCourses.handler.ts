import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreatePurchasedCoursesRequest } from './create-purchasedCourses.request';
import { PurchasedCoursesEntity } from '../../../entities/purchasedCourses.entities';

@Injectable()
export class CreatePurchasedCoursesHandler {

  async execute(payload: CreatePurchasedCoursesRequest) {

    const courseExists = await PurchasedCoursesEntity.exists({
      where: {
        userId: payload.userId,
        courseId: payload.courseId,
      },
    });

    if (courseExists) {
      throw new ConflictException(
        'This course has already been purchased by this user',
      );
    }

    const purchasedCourse = PurchasedCoursesEntity.create({
      userId: payload.userId,
      courseId: payload.courseId,
      isCompleted: payload.isCompleted,
      date: new Date(payload.date),
    });

    return await PurchasedCoursesEntity.save(
      purchasedCourse,
    );
  }
}