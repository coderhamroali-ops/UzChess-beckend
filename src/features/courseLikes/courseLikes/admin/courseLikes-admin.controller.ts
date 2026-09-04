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
import { GetAllCourseLikesHandler } from './get-all-courseLikes/get-all-courseLikes.handler';
import { CreateCourseLikesHandler } from './create-courseLikes/create-courseLikes.handler';
import { UpdateCourseLikesHandler } from './update-courseLikes/update-courseLikes.handler';
import { DeleteCourseLikesHandler } from './delete-courseLikes/delete-courseLikes.handler';
import { CreateCourseLikesRequest } from './create-courseLikes/create-courseLikes.request';
import { GetAllCourseLikesRequest } from './get-all-courseLikes/get-all-courseLikes.request';
import { UpdateCourseLikesRequest } from './update-courseLikes/update-courseLikes.request';



@Controller('admin/course-likes')
export class CourseLikesAdminController {

  constructor(
    private getAllHandler: GetAllCourseLikesHandler,
    private createLike: CreateCourseLikesHandler,
    private updateHandler: UpdateCourseLikesHandler,
    private deleteHandler: DeleteCourseLikesHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateCourseLikesRequest,
  ) {
    return await this.createLike.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllCourseLikesRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCourseLikesRequest,
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