import { GetAllDifficultiesHandlerP } from './get-all-difficulties/get-all-difficulties.handler';
import { Controller, Get, Query } from '@nestjs/common';
import { GetAllDifficultiesRequest } from './get-all-difficulties/get-all-difficulties-request';

@Controller('public/Difficulties')
export class DifficultiesPublicController {
  constructor(
    private getAllHandler: GetAllDifficultiesHandlerP,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllDifficultiesRequest) {
    return await this.getAllHandler.execute(filter)
  }
}