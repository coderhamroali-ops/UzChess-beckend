import { Controller, Get, Query } from '@nestjs/common';
import { GetAllBookReviewsHandlerPub } from './get-all-bookReviews/get-all-bookReviews.handler';
import { GetAllBookReviewsRequest } from './get-all-bookReviews/get-all-bookReviews.request';



@Controller('public/book-reviews')
export class BookReviewsPublicController {

  constructor(
    private getAllHandler: GetAllBookReviewsHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllBookReviewsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}