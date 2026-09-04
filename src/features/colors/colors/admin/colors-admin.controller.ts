import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateColorsHandler } from './create-colers/create-colors.handler';
import { CreateColorsRequest } from './create-colers/create-colors.request';
import { GetAllColorsRequest } from './get-all-colors/get-all-colors.request';
import { GetAllColorsHandler } from './get-all-colors/get-all-colors.handler';
import { UpdateColorsRequest } from './update-colors/update-colors.request';
import { UpdateColorsHandler } from './update-colors/update-colors.handler';
import { DeleteColorsHandler } from './delete-colors/delete-colors.handler';

@Controller('admin/colors')
export class ColorsAdminController {
  constructor(
    private createHandler: CreateColorsHandler,
    private getAllHandler: GetAllColorsHandler,
    private updateHandler: UpdateColorsHandler,
    private deleteHandler: DeleteColorsHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateColorsRequest) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllColorsRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateColorsRequest) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }

}