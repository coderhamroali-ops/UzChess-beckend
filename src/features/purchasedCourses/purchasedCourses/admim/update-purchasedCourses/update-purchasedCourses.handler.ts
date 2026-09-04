import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdatePurchasedCoursesRequest } from './update-purchasedCourses.request';
import { PurchasedCoursesEntity } from '../../../entities/purchasedCourses.entities';

@Injectable()
export class UpdatePurchasedCoursesHandler {

  async execute(
    id: number,
    payload: UpdatePurchasedCoursesRequest,
  ) {

    const purchasedCourse =
      await PurchasedCoursesEntity.findOneBy({
        id,
      });

    if (!purchasedCourse) {
      throw new NotFoundException(
        'Purchased course not found',
      );
    }

    const courseExists = await PurchasedCoursesEntity.exists({
      where: {
        id: Not(purchasedCourse.id),
        userId: payload.userId,
        courseId: payload.courseId,
      },
    });

    if (courseExists) {
      throw new ConflictException(
        'This course has already been purchased by this user',
      );
    }

    purchasedCourse.userId = payload.userId;
    purchasedCourse.courseId = payload.courseId;
    purchasedCourse.isCompleted = payload.isCompleted;
    purchasedCourse.date = new Date(payload.date);

    return await PurchasedCoursesEntity.save(
      purchasedCourse,
    );
  }
}