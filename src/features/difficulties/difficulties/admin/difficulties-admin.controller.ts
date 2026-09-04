import { CreateDifficultiesHandler } from './create-difficulties/create-difficulties.handler';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateDifficultiesRequest } from './create-difficulties/create-difficulties.request';
import { GetAllDifficultiesRequest } from './get-all-difficulties/get-all-difficulties-request';
import { GetAllDifficultiesHandler } from './get-all-difficulties/get-all-difficulties.handler';
import { UpdateDifficultiesRequest } from './update-difficulties/update-difficulties.request';
import { UpdateDifficultiesHandler } from './update-difficulties/update-difficulties.handler';
import { DeleteDifficultiesHandler } from './delete-difficulties/delete-difficulties.handler';

@Controller('admin/difficulties')
export class DifficultiesAdminController {
  constructor(
    private createAllHandler: CreateDifficultiesHandler,
    private getAllHandler: GetAllDifficultiesHandler,
    private updateHandler: UpdateDifficultiesHandler,
    private deleteHandler: DeleteDifficultiesHandler
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateDifficultiesRequest) {
    return await this.createAllHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllDifficultiesRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateDifficultiesRequest) {
    return await this.updateHandler.execute(id, payload)
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number ){
    return await this.deleteHandler.execute(id)
  }
}