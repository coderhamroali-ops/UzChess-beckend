import { Controller, Get, Query } from '@nestjs/common';
import { Auth } from '../../../../core/decorator/requires.decorator';
import {
  CurrentUser,
  TokenPayload,
} from '../../../../core/decorator/current-user.decorator';
import { GetAllReportsHandlerPub } from './get-all-reports/get-all-reports.handler';
import { GetAllReportsRequest } from './get-all-reports/get-all-reports.request';

@Controller('public/reports')
export class ReportsPublicController {
  constructor(private getAllHandler: GetAllReportsHandlerPub) {}

  /** Faqat joriy foydalanuvchining yozuvlari */

  @Auth()
  @Get('list')
  async getAll(
    @CurrentUser() user: TokenPayload,

    @Query() filter: GetAllReportsRequest,
  ) {
    return await this.getAllHandler.execute(user.sub, filter);
  }
}
