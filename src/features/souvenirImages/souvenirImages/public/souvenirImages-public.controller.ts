import { Controller, Get, Query } from '@nestjs/common';
import { GetAllSouvenirImagesHandlerPub } from './get-all-souvenirImages/get-all-souvenirImages.handler';
import { GetAllSouvenirImagesRequest } from './get-all-souvenirImages/get-all-souvenirImages.request';



@Controller('public/souvenir-images')
export class SouvenirImagesPublicController {

  constructor(
    private getAllHandler: GetAllSouvenirImagesHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllSouvenirImagesRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}