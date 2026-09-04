import { GetAllMatchesHandlerPublc } from './get-all-matches/get-all-matches.handler';
import { Controller, Get, Query } from '@nestjs/common';
import { GetAllMatchesRequest } from './get-all-matches/get-all-matches.request';

@Controller('public/matches')
export class MatchesPublicController {
  constructor(
    private getAllHandler: GetAllMatchesHandlerPublc,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllMatchesRequest) {
    return await this.getAllHandler.execute(filter);
  }
}