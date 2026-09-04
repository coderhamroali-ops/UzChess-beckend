import { Controller, Get, Query } from '@nestjs/common';
import { GetAllSouvenirColorsHandlerPub } from './get-all-souvenirColors/get-all-souvenirColors.handlet';
import { GetAllSouvenirColorsRequest } from './get-all-souvenirColors/get-all-souvenirColors.request';



@Controller('public/souvenir-colors')
export class SouvenirColorsPublicController {

  constructor(
    private getAllHandler: GetAllSouvenirColorsHandlerPub,
  ) {}

  @Get('list')
  async getAll(
    @Query() filter: GetAllSouvenirColorsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }
}