import { Controller, Get, Query } from '@nestjs/common';

import { GetAllSouvenirLikesHandlerPub } from './get-all-souvenirLikes/get-all-souvenirLikes.handler';
import { GetAllSouvenirLikesRequest } from './get-all-souvenirLikes/get-all-souvenirLikes.request';

@Controller('public/SouvenirLikes')
export class SouvenirLikesPublicController {
  constructor(
    private getAllhandler: GetAllSouvenirLikesHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllSouvenirLikesRequest,
  ) {
    return await this.getAllhandler.execute(filter);
  }
}