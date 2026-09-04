import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseCategoriesAdminController } from './courseCategories/courseCategories.admin.controller';
import {
  CreateCourseCategoriesHandler
} from './courseCategories/admin/create-courseCategories/create-courseCategories.handler';
import {
  GetAllCourseCategoriesHandler
} from './courseCategories/admin/get-all-courseCategories/get-all-courseCategories.handler';
import {
  UpdateCourseCategoriesHandler
} from './courseCategories/admin/update-courseCategories/update-courseCategories.handler';
import {
  DeleteCourseCategoriesHandler
} from './courseCategories/admin/delete-courseCategories/delete-courseCategories.handler';
import { CourseCategoriesPublicController } from './courseCategories/public/courseCategories-public.controller';
import {
  GetAllCourseCategoriesHandlerP
} from './courseCategories/public/get-all-courseCategories/get-all-courseCategories.handler';
import { CourseCategoriesEntities } from './entities/courseCategories.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([CourseCategoriesEntities])
  ],
  controllers: [
    CourseCategoriesAdminController,
    CourseCategoriesPublicController,
  ],
  providers: [
    CreateCourseCategoriesHandler,
    GetAllCourseCategoriesHandler,
    UpdateCourseCategoriesHandler,
    DeleteCourseCategoriesHandler,
    GetAllCourseCategoriesHandlerP,
  ]
})
export class CourseCategoriesModule {}