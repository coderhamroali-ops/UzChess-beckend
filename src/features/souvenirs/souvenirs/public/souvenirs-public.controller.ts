import { Controller, Get, Query } from '@nestjs/common';
import { GetAllSouvenirsHandlerPub } from './get-all-souvenirs/get-all-souvenirs.handler';
import { PaginationFilters } from '../../../common/pagination.filter';

@Controller('public/souvenirs')
export class SouvenirsPublicController {
  constructor(
    private  getAllSouvenirsHandler: GetAllSouvenirsHandlerPub,
  ) {}

  @Get('list')
  async getAll(@Query() filter: PaginationFilters) {
    return await this.getAllSouvenirsHandler.execute(filter);
  }
}