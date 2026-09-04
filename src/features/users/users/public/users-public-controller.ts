import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { GetAllUsersHandlerPub } from './get-all-user/get-all-users.handler';
import { GetAllUsersRequest } from './get-all-user/get-all-users.request';


@Controller('public/users')
export class UsersPublicController {

  constructor(
    private getAllHandler: GetAllUsersHandlerPub,
  ) {}

  @Get('list')
  async getAll(@Query() filter: GetAllUsersRequest) {
    return await this.getAllHandler.execute(filter);
  }
}