import { Controller, Get, Query } from '@nestjs/common';
import { Auth } from '../../../../core/decorator/requires.decorator';
import {
  CurrentUser,
  TokenPayload,
} from '../../../../core/decorator/current-user.decorator';

import { GetAllSouvenirLikesHandlerPub } from './get-all-souvenirLikes/get-all-souvenirLikes.handler';
import { GetAllSouvenirLikesRequest } from './get-all-souvenirLikes/get-all-souvenirLikes.request';

@Controller('public/SouvenirLikes')
export class SouvenirLikesPublicController {
  constructor(private getAllhandler: GetAllSouvenirLikesHandlerPub) {}

  /** Faqat joriy foydalanuvchining yozuvlari */
  @Auth()
  @Get('list')
  async getAll(
    @CurrentUser() user: TokenPayload,
    @Query() filter: GetAllSouvenirLikesRequest,
  ) {
    return await this.getAllhandler.execute(user.sub, filter);
  }
}
