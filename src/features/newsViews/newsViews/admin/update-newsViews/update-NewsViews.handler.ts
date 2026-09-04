import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsViewsEntities } from '../../../entities/newsViews.entities';
import { UpdateNewsViewsRequest } from './update-NewsViews.request';

@Injectable()
export class UpdateNewsViewsHandler {
  async execute(id: number, payload: UpdateNewsViewsRequest,) {
    const newsView = await NewsViewsEntities.findOne({
      where: { id },
    });

    if (!newsView) {
      throw new NotFoundException('News view not found');
    }

    Object.assign(newsView, payload);

    return await NewsViewsEntities.save(newsView);
  }
}