import { Controller, Get, Query } from '@nestjs/common';
import { GetAllSouvenirReviewsHandlerPub } from './get-all-souvenirReviews/get-all-souvenirReviews.handler';
import { GetAllSouvenirReviewsRequest } from './get-all-souvenirReviews/get-all-souvenirReviews.request';



@Controller('public/souvenir-reviews')
export class SouvenirReviewsPublicController {

  constructor(
    private getAllHandler: GetAllSouvenirReviewsHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllSouvenirReviewsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}