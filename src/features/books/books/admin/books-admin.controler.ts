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
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';

import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

import { GetAllBooksHandler } from './get-all-books/get-all-books.handler';
import { CreateBooksHandler } from './create-book/create-books.handler';
import { CreateBooksRequest } from './create-book/create-books.request';
import { GetAllBooksRequest } from './get-all-books/get-all-books.request';
import { DeleteBooksHandler } from './delete-books/delete-books.handler';
import { UpdateBooksHandler } from './update-books/update-books.handler';
import { UpdateBooksRequest } from './update-books/update-books.request';

import storageOptions from '../../../../core/configs/multer.configs';

@Controller('admin/Books')
export class BooksAdminControler {
  constructor(
    private createHandler: CreateBooksHandler,
    private getAllHandler: GetAllBooksHandler,
    private deleteHandler: DeleteBooksHandler,
    private updateHandler: UpdateBooksHandler,
  ) {}

  @Post('create')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        authorId: {
          type: 'number',
          example: 1,
        },

        categoryId: {
          type: 'number',
          example: 5,
        },

        languageId: {
          type: 'number',
          example: 2,
        },

        difficultyId: {
          type: 'number',
          example: 3,
        },

        title: {
          type: 'string',
          example: 'Chess Fundamentals',
        },

        description: {
          type: 'string',
          example: 'Chessni o‘rganish uchun kitob',
        },

        image: {
          type: 'string',
          format: 'binary',
        },

        file: {
          type: 'string',
          format: 'binary',
        },

        price: {
          type: 'number',
          example: 25.99,
        },

        newPrice: {
          type: 'number',
          example: 19.99,
        },

        rating: {
          type: 'number',
          example: 4.5,
        },

        reviewsCount: {
          type: 'number',
          example: 10,
        },

        pages: {
          type: 'number',
          example: 250,
        },

        pubDate: {
          type: 'string',
          format: 'date',
          example: '2026-09-06',
        },
      },

      required: [
        'authorId',
        'categoryId',
        'languageId',
        'difficultyId',
        'title',
        'description',
        'image',
        'price',
        'pages',
        'pubDate',
      ],
    },
  })
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        {
          name: 'image',
          maxCount: 1,
        },
        {
          name: 'file',
          maxCount: 1,
        },
      ],
      {
        storage: storageOptions,
      },
    ),
  )
  async create(
    @Body() payload: CreateBooksRequest,

    @UploadedFiles()
    files: {
      image?: Express.Multer.File[];
      file?: Express.Multer.File[];
    },
  ) {
    return await this.createHandler.execute(
      payload.authorId,
      payload.categoryId,
      payload.languageId,
      payload.difficultyId,
      payload.title,
      payload.description,

      files?.image?.[0],

      payload.price,
      payload.newPrice,
      payload.rating,
      payload.reviewsCount ?? 0,
      payload.pages,
      payload.pubDate,
    );
  }

  @Get('list')
  async getAll(@Query() filter: GetAllBooksRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBooksRequest,
  ) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }
}