import { Controller, Get, Query } from '@nestjs/common';
import { GetAllCountriesHandlerP } from './get-all-countries/get-all-countries.handler';
import { GetAllCountriesRequest } from './get-all-countries/get-all-countries.request';

@Controller('public/counties')
export class ContriesPublicController {
  constructor(
    private getAllHandler: GetAllCountriesHandlerP,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllCountriesRequest) {
    return await this.getAllHandler.execute(filter);
  }
}