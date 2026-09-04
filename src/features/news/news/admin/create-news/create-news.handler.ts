import { ILike } from 'typeorm';
import { ConflictException, Injectable } from '@nestjs/common';
import { CreateNewsRequest } from './create-news.request';
import { NewsEntities } from '../../../entities/news.entities';

@Injectable()
export class CreateNewsHandler {
  async execute(payload: CreateNewsRequest) {
    const titleExists = await NewsEntities.existsBy({ title: ILike(payload.title), content: ILike(payload.content) });
    if (titleExists)
      throw new ConflictException('Title already exists');

    const newcategories = { title: payload.title, content: payload.content, image: payload.image, date: payload.date } as NewsEntities;
    return await NewsEntities.save(newcategories);
  }
}