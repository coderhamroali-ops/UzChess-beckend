import { Controller, Get, Query } from '@nestjs/common';
import { Auth } from '../../../../core/decorator/requires.decorator';
import {
  CurrentUser,
  TokenPayload,
} from '../../../../core/decorator/current-user.decorator';
import { GetAllUsersLessonsHandlerPub } from './get-all-users_lessons/get-all-users_lessons.handler';
import { GetAllUsers_lessonsRequest } from './get-all-users_lessons/get-all-users_lessons.request';

@Controller('public/users-lessons')
export class UsersLessonsPublicController {
  constructor(private getAllHandler: GetAllUsersLessonsHandlerPub) {}

  /** Faqat joriy foydalanuvchining yozuvlari */

  @Auth()
  @Get('list')
  async getAll(
    @CurrentUser() user: TokenPayload,

    @Query() filter: GetAllUsers_lessonsRequest,
  ) {
    return await this.getAllHandler.execute(user.sub, filter);
  }
}
