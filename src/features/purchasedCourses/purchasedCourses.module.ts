import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchasedCoursesEntity } from './entities/purchasedCourses.entities';
import { PurchasedCoursesAdminController } from './purchasedCourses/admim/purchasedCourses-admin.controller';
import { PurchasedCoursesPublicController } from './purchasedCourses/public/purchasedCourses-public.controller';
import {
  CreatePurchasedCoursesHandler
} from './purchasedCourses/admim/create-purchasedCourses/create-purchasedCourses.handler';
import {
  GetAllPurchasedCoursesHandler
} from './purchasedCourses/admim/get-all-purchasedCourses/get-all-purchasedCourses.handler';
import {
  GetAllPurchasedCoursesHandlerPub
} from './purchasedCourses/public/get-all-purchasedCourses/get-all-purchasedCourses.handler';
import {
  UpdatePurchasedCoursesHandler
} from './purchasedCourses/admim/update-purchasedCourses/update-purchasedCourses.handler';
import {
  DeletePurchasedCoursesHandler
} from './purchasedCourses/admim/delete-purchasedCourses/dalete-purchasedCourses.handler';
import { BuyCourseHandler } from './purchasedCourses/public/buy-course/buy-course.handler';
import { GetMyPurchasesHandler } from './purchasedCourses/public/get-my-purchases/get-my-purchases.handler';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      PurchasedCoursesEntity,
    ]),
  ],

  controllers: [
    PurchasedCoursesAdminController,
    PurchasedCoursesPublicController,
  ],

  providers: [
    CreatePurchasedCoursesHandler,
    GetAllPurchasedCoursesHandler,
    GetAllPurchasedCoursesHandlerPub,
    UpdatePurchasedCoursesHandler,
    DeletePurchasedCoursesHandler,
    BuyCourseHandler,
    GetMyPurchasesHandler,
  ],
})
export class PurchasedCoursesModule {}