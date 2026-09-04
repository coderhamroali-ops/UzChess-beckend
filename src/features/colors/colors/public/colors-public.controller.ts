import { GetAllColorsHandlerP } from './get-all-colors/get-all-colors.handler';
import { Controller, Get, Query } from '@nestjs/common';
import { GetAllColorsRequest } from './get-all-colors/get-all-colors.request';

@Controller('public/colors')
export class ColorsPublicController {
  constructor(
    private getAllHandler: GetAllColorsHandlerP,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllColorsRequest) {
    return await this.getAllHandler.execute(filter);
  }
}