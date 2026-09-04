import { CreateLanguagesHandler } from './create-languages/create-languages.handler';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateLanguagesRequest } from './create-languages/create-languages.request';
import { GetAllLanguagesHandler } from './get-all-languages/get-all-Languages-handler';
import { GetAllLanguagesRequest } from './get-all-languages/get-all-Languages.request';
import { UpdateLanguagesRequest } from './update-languages/update-languages.request';
import { UpdateLanguagesHandler } from './update-languages/update-Languages.handler';
import { DeleteLanguagesHandler } from './delete-languages/delete-Languages.handler';

@Controller('admin/Languages')
export class LanguagesAdminController {
  constructor(
    private createLanguages: CreateLanguagesHandler,
    private getAllhandler: GetAllLanguagesHandler,
    private updateLanguages: UpdateLanguagesHandler,
    private deletehandler: DeleteLanguagesHandler,
  ) {
  }

  @Post('create')
  async create(@Body() payload: CreateLanguagesRequest) {
    return await this.createLanguages.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllLanguagesRequest) {
    return await this.getAllhandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() payload: UpdateLanguagesRequest) {
    return await this.updateLanguages.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number ) {
    return await this.deletehandler.execute(id)
  }
}