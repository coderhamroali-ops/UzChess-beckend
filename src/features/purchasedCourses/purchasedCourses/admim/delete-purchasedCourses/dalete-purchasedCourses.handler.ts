import { NotFoundException } from '@nestjs/common';
import { PurchasedCoursesEntity } from '../../../entities/purchasedCourses.entities';

export class DeletePurchasedCoursesHandler {

  async execute(id: number) {

    const purchasedCourse =
      await PurchasedCoursesEntity.findOneBy({
        id,
      });

    if (!purchasedCourse) {
      throw new NotFoundException(
        'Purchased course not found',
      );
    }

    return await PurchasedCoursesEntity.remove(
      purchasedCourse,
    );
  }
}