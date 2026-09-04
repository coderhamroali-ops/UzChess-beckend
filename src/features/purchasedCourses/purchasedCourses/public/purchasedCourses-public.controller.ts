import { Controller, Get, Query } from '@nestjs/common';
import { GetAllPurchasedCoursesHandlerPub } from './get-all-purchasedCourses/get-all-purchasedCourses.handler';
import { GetAllPurchasedCoursesReques } from './get-all-purchasedCourses/get-all-purchasedCourses.reques';


@Controller('public/purchased-courses')
export class PurchasedCoursesPublicController {

  constructor(
    private getAllHandler: GetAllPurchasedCoursesHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllPurchasedCoursesReques,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}