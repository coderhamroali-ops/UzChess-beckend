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
import { GetAllSouvenirReviewsHandler } from './get-all-souvenirReviews/get-all-souvenirReviews.handler';
import { CreateSouvenirReviewsHandler } from './create-souvenirReviews/create-souvenirReviews.handler';
import { UpdateSouvenirReviewsHandler } from './update-souvenirReviews/update-souvenirReviews.handler';
import { DeleteSouvenirReviewsHandler } from './delete-souvenirReviews/delete-souvenirReviews.handler';
import { CreateSouvenirReviewsRequest } from './create-souvenirReviews/create-souvenirReviews.request';
import { GetAllSouvenirReviewsRequest } from './get-all-souvenirReviews/get-all-souvenirReviews.request';
import { UpdateSouvenirReviewsRequest } from './update-souvenirReviews/update-souvenirReviews.request';


@Controller('admin/souvenir-reviews')
export class SouvenirReviewsAdminController {

  constructor(
    private getAllHandler: GetAllSouvenirReviewsHandler,
    private createReviews: CreateSouvenirReviewsHandler,
    private updateHandler: UpdateSouvenirReviewsHandler,
    private deleteHandler: DeleteSouvenirReviewsHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateSouvenirReviewsRequest,
  ) {
    return await this.createReviews.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllSouvenirReviewsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateSouvenirReviewsRequest,
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