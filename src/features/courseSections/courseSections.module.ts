import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseSectionsEntity } from './entities/courseSections.entities';
import { CourseSectionsAdminController } from './courseSections/admin/courseSections-admin.controller';
import { CourseSectionsPublicController } from './courseSections/public/courseSections.public.controller';
import {
  CreateCourseSectionsHandler
} from './courseSections/admin/create-courseSections/create-courseSections.handler';
import {
  GetAllCourseSectionsHandler
} from './courseSections/admin/get-all-courseSections/get-all-courseSections.handler';
import {
  GetAllCourseSectionsHandlerPub
} from './courseSections/public/get-all-courseSections/get-all-courseSections.handler';
import {
  UpdateCourseSectionsHandler
} from './courseSections/admin/update-courseSections/update-courseSections.handler';
import {
  DeleteCourseSectionsHandler
} from './courseSections/admin/delete-courseSections/delete-courseSections.handler';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      CourseSectionsEntity,
    ]),
  ],

  controllers: [
    CourseSectionsAdminController,
    CourseSectionsPublicController,
  ],

  providers: [
    CreateCourseSectionsHandler,
    GetAllCourseSectionsHandler,
    GetAllCourseSectionsHandlerPub,
    UpdateCourseSectionsHandler,
    DeleteCourseSectionsHandler,
  ],
})
export class CourseSectionsModule {}