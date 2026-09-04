import { Controller, Get, Query } from '@nestjs/common';
import { GetAllUsersLessonsHandlerPub } from './get-all-users_lessons/get-all-users_lessons.handler';
import { GetAllUsers_lessonsRequest } from './get-all-users_lessons/get-all-users_lessons.request';



@Controller('public/users-lessons')
export class UsersLessonsPublicController {

  constructor(
    private getAllHandler: GetAllUsersLessonsHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllUsers_lessonsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}