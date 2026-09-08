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

import { CreateCoursesHandler } from './create-courses/create-courses.handler';
import { CreateCoursesRequest } from './create-courses/create-courses.request';
import { GetAllCoursesHandler } from './get-all-courses/get-all-courses.handler';
import { GetAllCoursesRequest } from './get-all-courses/get-all-courses.request';
import { UpdateCoursesHandler } from './update-courses/update-courses.handler';
import { UpdateCoursesRequest } from './update-courses/update-courses.request';
import { DeleteCoursesHandler } from './delete-courses/delete-courses.handler';

import storageOptions from '../../../../core/configs/multer.configs';

@Controller('admin/courses')
export class CoursesAdminController {
  constructor(
    private createHandler: CreateCoursesHandler,
    private getAllHandler: GetAllCoursesHandler,
    private updateHandler: UpdateCoursesHandler,
    private deleteHandler: DeleteCoursesHandler,
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
          example: 'Chess for Beginners',
        },

        image: {
          type: 'string',
          format: 'binary',
          example: 'http/localhost:8000'
        },

        price: {
          type: 'number',
          example: 49.99,
        },

        newPrice: {
          type: 'number',
          example: 39.99,
        },

        isPublished: {
          type: 'boolean',
          example: true,
        },

        rating: {
          type: 'number',
          example: 4.5,
        },

        reviewsCount: {
          type: 'number',
          example: 10,
        },

        sectionsCount: {
          type: 'number',
          example: 5,
        },

        lessonsCount: {
          type: 'number',
          example: 25,
        },
      },

      required: [
        'authorId',
        'categoryId',
        'languageId',
        'difficultyId',
        'title',
        'image',
        'price',
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
      ],
      {
        storage: storageOptions,
      },
    ),
  )
  async create(
    @Body() payload: CreateCoursesRequest,

    @UploadedFiles()
    files: {
      image?: Express.Multer.File[];
    },
  ) {
    return await this.createHandler.execute(
      payload.authorId,
      payload.categoryId,
      payload.languageId,
      payload.difficultyId,
      payload.title,

      files?.image?.[0],

      payload.price,
      payload.newPrice,
      payload.isPublished,
      payload.reviewsCount ?? 0,
      payload.rating,
      payload.sectionsCount,
      payload.lessonsCount,
    );
  }

  @Get('list')
  async getAll(@Query() filter: GetAllCoursesRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCoursesRequest,
  ) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteHandler.execute(id);
  }
}