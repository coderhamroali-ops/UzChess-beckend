import { GetAllAuthorsHandlerP } from './get-all-authors/get-all-authors.handler';
import { Controller, Get, Query } from '@nestjs/common';
import { GetAllAuthorsRequest } from './get-all-authors/get-all-authors.request';

@Controller('public/authors')
export class AuthorsPublicController {

  constructor(
    private getAllHandler: GetAllAuthorsHandlerP,
  ) {
  }

  @Get('list')
  async getAll(@Query() filter: GetAllAuthorsRequest) {
    return await this.getAllHandler.execute(filter)
  }
}