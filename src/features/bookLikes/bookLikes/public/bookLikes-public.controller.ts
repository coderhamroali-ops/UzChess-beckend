import { Controller, Get, Query } from '@nestjs/common';
import { GetAllBookLikesHandlerPub } from './get-all-bookLikes/get-all-bookLikes.handler';
import { GetAllBookLikesRequest } from './get-all-bookLikes/get-all-bookLikes.request';



@Controller('public/book-likes')
export class BookLikesPublicController {

  constructor(
    private getAllHandler: GetAllBookLikesHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllBookLikesRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}