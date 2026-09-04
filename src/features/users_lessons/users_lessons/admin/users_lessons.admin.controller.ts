import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GetAllUsersLessonsHandler } from './get-all-users_lessons/get-all-users_lessons.handler';
import { CreateUsersLessonsHandler } from './create-users_lessons/create-users_lessons.handler';
import { UpdateUsersLessonsHandler } from './update-users_lessons/update-users_lessons.handler';
import { DeleteUsersLessonsHandler } from './delete-users_lessons/delete-users_lessons.handler';
import { CreateUsersLessonsRequest } from './create-users_lessons/create-users_lessons.request';
import { GetAllUsers_lessonsRequest } from './get-all-users_lessons/get-all-users_lessons.request';
import { UpdateUsersLessonsRequest } from './update-users_lessons/update-users_lessons.request';



@Controller('admin/users-lessons')
export class UsersLessonsAdminController {

  constructor(
    private getAllHandler: GetAllUsersLessonsHandler,
    private createLesson: CreateUsersLessonsHandler,
    private updateHandler: UpdateUsersLessonsHandler,
    private deleteHandler: DeleteUsersLessonsHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateUsersLessonsRequest,
  ) {
    return await this.createLesson.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllUsers_lessonsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUsersLessonsRequest,
  ) {
    return await this.updateHandler.execute(
      id,
      payload,
    );
  }

  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.deleteHandler.execute(id);
  }
}