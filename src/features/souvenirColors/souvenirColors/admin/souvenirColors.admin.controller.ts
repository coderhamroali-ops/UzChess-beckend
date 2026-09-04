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
import { GetAllSouvenirColorsHandler } from './get-all-souvenirColors/get-all-souvenirColors.handlet';
import { CreateSouvenirColorsHandler } from './create-souvenirColors/create-souvenirColors.handler';
import { UpdateSouvenirColorsHandler } from './update-souvenirColors/update-souvenirColors.handler';
import { DeleteSouvenirColorsHandler } from './delete-souvenirColors/delete-souvenirColors.handler';
import { CreateSouvenirColorsRequest } from './create-souvenirColors/create-souvenirColors.request';
import { GetAllSouvenirColorsRequest } from './get-all-souvenirColors/get-all-souvenirColors.request';
import { UpdateSouvenirColorsRequest } from './update-souvenirColors/update-souvenirColors.request';


@Controller('admin/souvenir-colors')
export class SouvenirColorsAdminController {

  constructor(
    private getAllHandler: GetAllSouvenirColorsHandler,
    private createColors: CreateSouvenirColorsHandler,
    private updateHandler: UpdateSouvenirColorsHandler,
    private deleteHandler: DeleteSouvenirColorsHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateSouvenirColorsRequest,
  ) {
    return await this.createColors.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllSouvenirColorsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateSouvenirColorsRequest,
  ) {
    return await this.updateHandler.execute(
      id,
      payload,
    );
  }

  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.deleteHandler.execute(id);
  }
}