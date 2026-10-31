import { Controller, Get, Query } from '@nestjs/common';
import { Auth } from '../../../../core/decorator/requires.decorator';
import {
  CurrentUser,
  TokenPayload,
} from '../../../../core/decorator/current-user.decorator';
import { GetAllBookLikesHandlerPub } from './get-all-bookLikes/get-all-bookLikes.handler';
import { GetAllBookLikesRequest } from './get-all-bookLikes/get-all-bookLikes.request';

@Controller('public/book-likes')
export class BookLikesPublicController {
  constructor(private getAllHandler: GetAllBookLikesHandlerPub) {}

  /** Faqat joriy foydalanuvchining yozuvlari */

  @Auth()
  @Get('list')
  async getAll(
    @CurrentUser() user: TokenPayload,

    @Query() filter: GetAllBookLikesRequest,
  ) {
    return await this.getAllHandler.execute(user.sub, filter);
  }
}
