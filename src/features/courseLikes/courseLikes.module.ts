import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseLikesEntity } from './entities/courseLikes.entities';
import { CourseLikesAdminController } from './courseLikes/admin/courseLikes-admin.controller';
import { CourseLikesPublicController } from './courseLikes/public/courseLikes-public.controller';
import { CreateCourseLikesHandler } from './courseLikes/admin/create-courseLikes/create-courseLikes.handler';
import { GetAllCourseLikesHandler } from './courseLikes/admin/get-all-courseLikes/get-all-courseLikes.handler';
import { GetAllCourseLikesHandlerPub } from './courseLikes/public/get-all-courseLikes/get-all-courseLikes.handler';
import { UpdateCourseLikesHandler } from './courseLikes/admin/update-courseLikes/update-courseLikes.handler';
import { DeleteCourseLikesHandler } from './courseLikes/admin/delete-courseLikes/delete-courseLikes.handler';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      CourseLikesEntity,
    ]),
  ],

  controllers: [
    CourseLikesAdminController,
    CourseLikesPublicController,
  ],

  providers: [
    CreateCourseLikesHandler,
    GetAllCourseLikesHandler,
    GetAllCourseLikesHandlerPub,
    UpdateCourseLikesHandler,
    DeleteCourseLikesHandler,
  ],
})
export class CourseLikesModule {}