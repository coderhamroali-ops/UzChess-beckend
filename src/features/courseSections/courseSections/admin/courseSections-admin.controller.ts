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
import { GetAllCourseSectionsHandler } from './get-all-courseSections/get-all-courseSections.handler';
import { CreateCourseSectionsHandler } from './create-courseSections/create-courseSections.handler';
import { UpdateCourseSectionsHandler } from './update-courseSections/update-courseSections.handler';
import { DeleteCourseSectionsHandler } from './delete-courseSections/delete-courseSections.handler';
import { CreateCourseSectionsRequest } from './create-courseSections/create-courseSections.request';
import { GetAllCourseSectionsRequest } from './get-all-courseSections/get-all-courseSections.request';
import { UpdateCourseSectionsRequest } from './update-courseSections/update-courseSections.request';




@Controller('admin/course-sections')
export class CourseSectionsAdminController {

  constructor(
    private getAllHandler: GetAllCourseSectionsHandler,
    private createSections: CreateCourseSectionsHandler,
    private updateHandler: UpdateCourseSectionsHandler,
    private deleteHandler: DeleteCourseSectionsHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateCourseSectionsRequest,
  ) {
    return await this.createSections.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllCourseSectionsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCourseSectionsRequest,
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