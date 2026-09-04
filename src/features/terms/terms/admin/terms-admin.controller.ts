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
import { GetAllTermsHandler } from './get-all-terms/get-all-terms.handler';
import { CreateTermsHandler } from './create-terms/create-terms.handler';
import { UpdateTermsHandler } from './update-terms/update-terms.handler';
import { DeleteTermsHandler } from './delete-terms/delete-terms.handler';
import { CreateTermsRequest } from './create-terms/create-terms.request';
import { GetAllTermsRequest } from './get-all-terms/get-all-terms.request';
import { UpdateTermsRequest } from './update-terms/update-terms.request';



@Controller('admin/terms')
export class TermsAdminController {

  constructor(
    private getAllHandler: GetAllTermsHandler,
    private createTerms: CreateTermsHandler,
    private updateHandler: UpdateTermsHandler,
    private deleteHandler: DeleteTermsHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateTermsRequest,
  ) {
    return await this.createTerms.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllTermsRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateTermsRequest,
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