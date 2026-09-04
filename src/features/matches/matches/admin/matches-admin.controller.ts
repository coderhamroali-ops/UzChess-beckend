import { CreateMatchesHandler } from './create-matches/create-matches.hendler';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateMatchesRequest } from './create-matches/create-matches.request';
import { GetAllMatchesHandler } from './get-all-matches/get-all-matches.handler';
import { GetAllMatchesRequest } from './get-all-matches/get-all-matches.request';
import { UpdateMatchesHandler } from './update-matches/update-matches.handler';
import { DeleteMatchesHandler } from './delete-matches/delete-handler';
import { UpdateMatchesRequest } from './update-matches/update-matches.request';

@Controller('admin/Matches')
export class MatchesAdminController {
  constructor(
    private createHandler: CreateMatchesHandler,
    private getAllHandler: GetAllMatchesHandler,
    private updeteHandler: UpdateMatchesHandler,
    private deleteHandler: DeleteMatchesHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateMatchesRequest) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllMatchesRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateMatchesRequest) {
    return await this.updeteHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }
}