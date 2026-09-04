import {  GetAllLanguagesHandlerpublic } from './get-all-languages/get-all-Languages-handler';
import { Controller, Get, Query } from '@nestjs/common';
import { GetAllLanguagesRequest } from './get-all-languages/get-all-Languages.request';

@Controller('public/Languages')
export class LanguagesPublicController {
  constructor(
    private getAllHandler: GetAllLanguagesHandlerpublic,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllLanguagesRequest) {
    return await this.getAllHandler.execute(filter)
  }
}