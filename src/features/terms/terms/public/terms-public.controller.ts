import { Controller, Get, Query } from '@nestjs/common';
import { GetAllTermsHandlerPub } from './get-all-terms/get-all-terms.handler';
import { GetAllTermsRequest } from './get-all-terms/get-all-terms.request';



@Controller('public/terms')
export class TermsPublicController {

  constructor(
    private getAllHandler: GetAllTermsHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllTermsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}