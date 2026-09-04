import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersLessonsEntity } from './entities/users_lessons.entities';
import { UsersLessonsAdminController } from './users_lessons/admin/users_lessons.admin.controller';
import { UsersLessonsPublicController } from './users_lessons/public/users_lessons-public.controller';
import { CreateUsersLessonsHandler } from './users_lessons/admin/create-users_lessons/create-users_lessons.handler';
import { GetAllUsersLessonsHandler } from './users_lessons/admin/get-all-users_lessons/get-all-users_lessons.handler';
import {
  GetAllUsersLessonsHandlerPub
} from './users_lessons/public/get-all-users_lessons/get-all-users_lessons.handler';
import { UpdateUsersLessonsHandler } from './users_lessons/admin/update-users_lessons/update-users_lessons.handler';
import { DeleteUsersLessonsHandler } from './users_lessons/admin/delete-users_lessons/delete-users_lessons.handler';



@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersLessonsEntity,
    ]),
  ],

  controllers: [
    UsersLessonsAdminController,
    UsersLessonsPublicController,
  ],

  providers: [
    CreateUsersLessonsHandler,
    GetAllUsersLessonsHandler,
    GetAllUsersLessonsHandlerPub,
    UpdateUsersLessonsHandler,
    DeleteUsersLessonsHandler,
  ],
})
export class UsersLessonsModule {}