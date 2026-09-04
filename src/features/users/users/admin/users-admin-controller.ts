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

import { UpdateUsersRequest } from './update-users/update-users.request';

import { DeleteUsersHandler } from './delete-users/delete-users.handler';
import { CreateUsersHandler } from './create-users/create-users.handler';
import { GetAllUsersHandler } from './get-all-user/get-all-users.handler';
import { UpdateUsersHandler } from './update-users/update-users-handler';
import { CreateUsersRequest } from './create-users/create-user.request';
import { GetAllUsersRequest } from './get-all-user/get-all-users.request';

@Controller('admin/users')
export class UsersAdminController {

  constructor(
    private createHandler: CreateUsersHandler,
    private getAllHandler: GetAllUsersHandler,
    private updateHandler: UpdateUsersHandler,
    private deleteHandler: DeleteUsersHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateUsersRequest,
  ) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllUsersRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUsersRequest,
  ) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.deleteHandler.execute(id);
  }
}