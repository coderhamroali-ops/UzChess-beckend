import { CreatePlayersHandler } from './create-players/create-players.handler';
import { GetAllPlayersHandler } from './get-all-players/get-all-players.handler';
import { UpdatePlayersHandler } from './update-players/update-players.handler';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreatePlayersRequest } from './create-players/create-players.request';
import { GetAllPlayersRequest } from './get-all-players/get-all-players.request';
import { UpdatePlayersRequest } from './update-players/update-players.request';
import { DeletePlayersHandler } from './delete-players/delete-players.handler';

@Controller('admin/players')
export class PlayersAdminController {
  constructor(
    private createHandler: CreatePlayersHandler,
    private getAllHandler: GetAllPlayersHandler,
    private updateHandler: UpdatePlayersHandler,
    private deleteHandler: DeletePlayersHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreatePlayersRequest) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllPlayersRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdatePlayersRequest) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id)
  }
}