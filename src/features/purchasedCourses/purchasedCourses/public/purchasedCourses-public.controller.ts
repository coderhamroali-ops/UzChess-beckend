import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GetAllPurchasedCoursesHandlerPub } from './get-all-purchasedCourses/get-all-purchasedCourses.handler';
import { GetAllPurchasedCoursesReques } from './get-all-purchasedCourses/get-all-purchasedCourses.reques';
import { BuyCourseHandler } from './buy-course/buy-course.handler';
import { BuyCourseRequest } from './buy-course/buy-course.request';
import { GetMyPurchasesHandler } from './get-my-purchases/get-my-purchases.handler';
import { GetMyPurchasedCoursesRequest } from './get-my-purchases/get-my-purchases.request';
import { Auth } from '../../../../core/decorator/requires.decorator';
import {
  CurrentUser,
  TokenPayload,
} from '../../../../core/decorator/current-user.decorator';

@Controller('public/purchased-courses')
export class PurchasedCoursesPublicController {

  constructor(
    private getAllHandler: GetAllPurchasedCoursesHandlerPub,
    private buyCourseHandler: BuyCourseHandler,
    private getMyPurchasesHandler: GetMyPurchasesHandler,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllPurchasedCoursesReques,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Auth()
  @Post('buy')
  async buy(
    @CurrentUser() user: TokenPayload,
    @Body() payload: BuyCourseRequest,
  ) {
    return await this.buyCourseHandler.execute(user.sub, payload);
  }

  @Auth()
  @Get('my')
  async my(
    @CurrentUser() user: TokenPayload,
    @Query() filter: GetMyPurchasedCoursesRequest,
  ) {
    return await this.getMyPurchasesHandler.execute(user.sub, filter);
  }
}