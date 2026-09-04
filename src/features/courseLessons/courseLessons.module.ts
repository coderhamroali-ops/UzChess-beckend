import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseLessonsEntity } from './entities/courseLessons.entities';
import { CourseLessonsAdminController } from './courseLessons/admin/courseLessons-admin.controller';
import { CourseLessonsPublicController } from './courseLessons/public/courseLessons-public.controller';
import { CreateCourseLessonsHandler } from './courseLessons/admin/create-courseLessons/create-courseLessons.handler';
import { GetAllCourseLessonsHandler } from './courseLessons/admin/get-all-courseLessons/get-all-courseLessons.handler';
import {
  GetAllCourseLessonsHandlerPub
} from './courseLessons/public/get-all-courseLessons/get-all-courseLessons.handler';
import { UpdateCourseLessonsHandler } from './courseLessons/admin/update-courseLessons/update-courseLessons.handler';
import { DeleteCourseLessonsHandler } from './courseLessons/admin/delete-courseLessons/delete-courseLessons.handler';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      CourseLessonsEntity,
    ]),
  ],

  controllers: [
    CourseLessonsAdminController,
    CourseLessonsPublicController,
  ],

  providers: [
    CreateCourseLessonsHandler,
    GetAllCourseLessonsHandler,
    GetAllCourseLessonsHandlerPub,
    UpdateCourseLessonsHandler,
    DeleteCourseLessonsHandler,
  ],
})
export class CourseLessonsModule {}