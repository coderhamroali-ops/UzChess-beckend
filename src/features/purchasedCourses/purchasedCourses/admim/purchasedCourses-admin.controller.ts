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
import { GetAllPurchasedCoursesHandler } from './get-all-purchasedCourses/get-all-purchasedCourses.handler';
import { CreatePurchasedCoursesHandler } from './create-purchasedCourses/create-purchasedCourses.handler';
import { UpdatePurchasedCoursesHandler } from './update-purchasedCourses/update-purchasedCourses.handler';
import { DeletePurchasedCoursesHandler } from './delete-purchasedCourses/dalete-purchasedCourses.handler';
import { CreatePurchasedCoursesRequest } from './create-purchasedCourses/create-purchasedCourses.request';
import { GetAllPurchasedCoursesReques } from './get-all-purchasedCourses/get-all-purchasedCourses.reques';
import { UpdatePurchasedCoursesRequest } from './update-purchasedCourses/update-purchasedCourses.request';



@Controller('admin/purchased-courses')
export class PurchasedCoursesAdminController {

  constructor(
    private getAllHandler: GetAllPurchasedCoursesHandler,
    private createPurchasedCourse: CreatePurchasedCoursesHandler,
    private updateHandler: UpdatePurchasedCoursesHandler,
    private deleteHandler: DeletePurchasedCoursesHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreatePurchasedCoursesRequest,
  ) {
    return await this.createPurchasedCourse.execute(
      payload,
    );
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllPurchasedCoursesReques,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePurchasedCoursesRequest,
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