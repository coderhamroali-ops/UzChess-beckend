import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateBookCategoriesRequest } from './update-book-categories.request';
import { Entitybook } from '../../../entities/book-category.entities';
import { ILike, Not } from 'typeorm';

@Injectable()
export class UpdateBookCategoriesHandler {
  async execute(id: number, payload: UpdateBookCategoriesRequest) {
    const category = await Entitybook.findOneBy({id: id});

    if (!category) {
      throw new NotFoundException('Book category not found');
    }

    const titleExists = await Entitybook.exists({
      where: { id: Not(category.id), title: ILike(payload.title)},
    });

    if (titleExists) {
      throw new ConflictException('Title');
    }

    category.title = payload.title;

    return await Entitybook.save(category);
  }
}