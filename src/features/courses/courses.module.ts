import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateCoursesHandler } from './courses/admin/create-courses/create-courses.handler';
import { GetAllCoursesHandler } from './courses/admin/get-all-courses/get-all-courses.handler';
import { UpdateCoursesHandler } from './courses/admin/update-courses/update-courses.handler';
import { DeleteCoursesHandler } from './courses/admin/delete-courses/delete-courses.handler';
import { CoursesPublicController } from './courses/public/courses-public.controller';
import { GetAllCoursesHandlerP } from './courses/public/get-all-courses/get-all-courses.handler';
import { CoursesEntities } from './entities/courses-entities';
import { CoursesAdminController } from './courses/admin/courses-amin.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CoursesEntities,
    ]),
  ],
  controllers: [
    CoursesAdminController,
    CoursesPublicController,
  ],
  providers: [
    CreateCoursesHandler,
    GetAllCoursesHandler,
    UpdateCoursesHandler,
    DeleteCoursesHandler,
    GetAllCoursesHandlerP,
  ]
})
export class CoursesModule {}