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
import { GetAllSouvenirImagesHandler } from './get-all-souvenirImages/get-all-souvenirImages.handler';
import { CreateSouvenirImagesHandler } from './create-souvenirImages/create-souvenirImages.handler';
import { UpdateSouvenirImagesHandler } from './update-souvenirImages/update-souvenirImages.handler';
import { DeleteSouvenirImagesHandler } from './delete-souvenirImages/delete-souvenirImages.handler';
import { CreateSouvenirImagesRequest } from './create-souvenirImages/create-souvenirImages.request';
import { GetAllSouvenirImagesRequest } from './get-all-souvenirImages/get-all-souvenirImages.request';
import { UpdateSouvenirImagesRequest } from './update-souvenirImages/update-souvenirImages.request';



@Controller('admin/souvenir-images')
export class SouvenirImagesAdminController {

  constructor(
    private getAllHandler: GetAllSouvenirImagesHandler,
    private createImages: CreateSouvenirImagesHandler,
    private updateHandler: UpdateSouvenirImagesHandler,
    private deleteHandler: DeleteSouvenirImagesHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateSouvenirImagesRequest,
  ) {
    return await this.createImages.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllSouvenirImagesRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateSouvenirImagesRequest,
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