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


import { PaginationFilters } from '../../../common/pagination.filter';
import { CreateSouvenirsHandler } from './create-souvenirs/create-souvenirs.handler';
import { GetAllSouvenirsHandler } from './get-all-souvenirs/get-all-souvenirs.handler';
import { UpdateSouvenirsHandler } from './update-souvenirs/update-souvenirs.handler';
import { DeleteSouvenirsHandler } from './delete-souvenirs/delete-souvenirs.handler';
import { CreateSouvenirsRequest } from './create-souvenirs/create-souvenirs.request';
import { UpdateSouvenirsRequest } from './update-souvenirs/update-souvenirs.request';
import { GetAllSouvenirsRequest } from './get-all-souvenirs/get-all-souvenirs.request';

@Controller('admin/souvenirs')
export class SouvenirsController {
  constructor(
    private createSouvenirsHandler: CreateSouvenirsHandler,
    private getAllSouvenirsHandler: GetAllSouvenirsHandler,
    private updateSouvenirsHandler: UpdateSouvenirsHandler,
    private deleteSouvenirsHandler: DeleteSouvenirsHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateSouvenirsRequest) {
    return await this.createSouvenirsHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllSouvenirsRequest) {
    return await this.getAllSouvenirsHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateSouvenirsRequest,
  ) {
    return await this.updateSouvenirsHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteSouvenirsHandler.execute(id);
  }
}