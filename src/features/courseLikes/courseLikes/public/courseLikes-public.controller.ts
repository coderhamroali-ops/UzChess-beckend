import { Controller, Get, Query } from '@nestjs/common';
import { Auth } from '../../../../core/decorator/requires.decorator';
import {
  CurrentUser,
  TokenPayload,
} from '../../../../core/decorator/current-user.decorator';
import { GetAllCourseLikesHandlerPub } from './get-all-courseLikes/get-all-courseLikes.handler';
import { GetAllCourseLikesRequest } from './get-all-courseLikes/get-all-courseLikes.request';

@Controller('public/course-likes')
export class CourseLikesPublicController {
  constructor(private getAllHandler: GetAllCourseLikesHandlerPub) {}

  /** Faqat joriy foydalanuvchining yozuvlari */

  @Auth()
  @Get('list')
  async getAll(
    @CurrentUser() user: TokenPayload,

    @Query() filter: GetAllCourseLikesRequest,
  ) {
    return await this.getAllHandler.execute(user.sub, filter);
  }
}
