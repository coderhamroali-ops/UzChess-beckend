import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateCountriesRequest } from './create-countries/create-countries.request';
import { CreateCountriesHandler } from './create-countries/create-countries.handler';
import { GetAllCountriesRequest } from './get-all-countries/get-all-countries.request';
import { GetAllCountriesHandler } from './get-all-countries/get-all-countries.handler';
import { UpdateCountriesRequest } from './update-countries/update-countries.request';
import { UpdateCountriesHandler } from './update-countries/update-countries.handler';
import { DeleteCountriesHandler } from './delete-countries/delete-countries.handler';

@Controller('admin/countries')
export class CountriesAdminController {
  constructor(
    private createHandler: CreateCountriesHandler,
    private getAllHandler: GetAllCountriesHandler,
    private updateHandler: UpdateCountriesHandler,
    private deleteHandler: DeleteCountriesHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateCountriesRequest) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllCountriesRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateCountriesRequest) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }
}