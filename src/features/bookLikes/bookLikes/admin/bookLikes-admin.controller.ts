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
import { GetAllBookLikesHandler } from './get-all-bookLikes/get-all-bookLikes.handler';
import { CreateBookLikesHandler } from './create-bookLikes/create-bookLikes.handler';
import { UpdateBookLikesHandler } from './update-bookLikes/update-bookLikes.handler';
import { DeleteBookLikesHandler } from './delete-bookLikes/delete-bookLikes.handler';
import { CreateBookLikesRequest } from './create-bookLikes/create-bookLikes.request';
import { GetAllBookLikesRequest } from './get-all-bookLikes/get-all-bookLikes.request';
import { UpdateBookLikesRequest } from './update-bookLikes/update-bookLikes.request';



@Controller('admin/book-likes')
export class BookLikesAdminController {

  constructor(
    private getAllHandler: GetAllBookLikesHandler,
    private createLike: CreateBookLikesHandler,
    private updateHandler: UpdateBookLikesHandler,
    private deleteHandler: DeleteBookLikesHandler,
  ) {}

  @Post('create')
  async create(
    @Body() payload: CreateBookLikesRequest,
  ) {
    return await this.createLike.execute(payload);
  }

  @Get('list')
  async getAll(
    @Query() filter: GetAllBookLikesRequest,
  ) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBookLikesRequest,
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