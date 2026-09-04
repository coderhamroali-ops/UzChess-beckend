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
import { GetAllBookReviewsHandler } from './get-all-bookReviews/get-all-bookReviews.handler';
import { CreateBookReviewsHandler } from './create-bookReviews/create-bookReviews.handler';
import { UpdateBookReviewsHandler } from './update-bookReviews/update-bookReviews.handler';
import { DeleteBookReviewsHandler } from './delete-bookReviews/delete-bookReviews.handler';
import { CreateBookReviewsRequest } from './create-bookReviews/create-bookReviews.request';
import { GetAllBookReviewsRequest } from './get-all-bookReviews/get-all-bookReviews.request';
import { UpdateBookReviewsRequest } from './update-bookReviews/update-bookReviews.request';



@Controller('admin/book-reviews')
export class BookReviewsAdminController {

  constructor(
    private getAllHandler: GetAllBookReviewsHandler,
    private createReview: CreateBookReviewsHandler,
    private updateHandler: UpdateBookReviewsHandler,
    private deleteHandler: DeleteBookReviewsHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateBookReviewsRequest,
  ) {
    return await this.createReview.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllBookReviewsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBookReviewsRequest,
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