import { GetAllPlayersHandlerPub } from './get-all-players/get-all-players.handler';
import { Controller, Get, Query } from '@nestjs/common';
import { GetAllPlayersRequest } from './get-all-players/get-all-players.request';

@Controller('public/players')
export class PlayersPublicController {
  constructor(
    private getAllHandler: GetAllPlayersHandlerPub,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllPlayersRequest) {
    return await this.getAllHandler.execute(filter)
  }
}