import { Injectable } from '@nestjs/common';
import { CreateNewsViewsRequest } from './create-newsViews.request';
import { NewsViewsEntities } from '../../../entities/newsViews.entities';

@Injectable()
export class CreateNewsViewsHandler {
  async execute(payload: CreateNewsViewsRequest) {
    const now = new Date();

    const newNewsView = {
      userId: payload.userId,
      newsId: payload.newsId,
      firstDate: now,
      lastDate: now,
      count: 1,
    } as NewsViewsEntities;

    return await NewsViewsEntities.save(newNewsView);
  }
}