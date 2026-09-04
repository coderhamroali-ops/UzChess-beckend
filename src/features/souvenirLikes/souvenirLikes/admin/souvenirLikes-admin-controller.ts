import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreateSouvenirLikesHandler } from './create-souvenirLikes/create-souvenirLikes.handler';
import { CreateSouvenirLikesRequest } from './create-souvenirLikes/create-souvenirLikes.request';

import { GetAllSouvenirLikesHandler } from './get-all-souvenirLikes/get-all-souvenirLikes.handler';
import { GetAllSouvenirLikesRequest } from './get-all-souvenirLikes/get-all-souvenirLikes.request';

import { UpdateSouvenirLikesHandler } from './update-souvenirLikes/update-souvenirLikes.handler';
import { UpdateSouvenirLikesRequest } from './update-souvenirLikes/update-souvenirLikes.request';

import { DeleteSouvenirLikesHandler } from './delete-souvenirLikes/delete-souvenirLikes.handler';

@Controller('admin/SouvenirLikes')
export class SouvenirLikesAdminController {
  constructor(
    private createSouvenirLikes: CreateSouvenirLikesHandler,
    private getAllhandler: GetAllSouvenirLikesHandler,
    private updateSouvenirLikes: UpdateSouvenirLikesHandler,
    private deletehandler: DeleteSouvenirLikesHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateSouvenirLikesRequest,
  ) {
    return await this.createSouvenirLikes.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllSouvenirLikesRequest,
  ) {
    return await this.getAllhandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateSouvenirLikesRequest,
  ) {
    return await this.updateSouvenirLikes.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.deletehandler.execute(id);
  }
}