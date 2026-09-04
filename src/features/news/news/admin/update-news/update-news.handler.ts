import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Not } from 'typeorm';
import { UpdateNewsRequest } from './update-news.request';
import { NewsEntities } from '../../../entities/news.entities';

@Injectable()
export class UpdateNewsHandler {
  async execute(id: number, payload: UpdateNewsRequest) {
    const category = await NewsEntities.findOneBy({ id: id });

    if (!category) {
      throw new NotFoundException('Book category not found');
    }

    const titleExists = await NewsEntities.exists({
      where: { id: Not(category.id), title: ILike(payload.title), content: ILike(payload.content), image: payload.image, date: payload.date },
    });

    if (titleExists) {
      throw new ConflictException('Title');
    }

    category.title = payload.title;
    category.content = payload.content;
    category.date = payload.date;
    category.image = payload.image;

    return await NewsEntities.save(category);
  }
}