import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsViewsEntities } from '../../../entities/newsViews.entities';

@Injectable()
export class DeleteNewsViewsHandler {
  async execute(id: number) {
    const newsView = await NewsViewsEntities.findOne({
      where: { id },
    });

    if (!newsView) {
      throw new NotFoundException('News view not found');
    }

    await NewsViewsEntities.remove(newsView);

    return {
      message: 'News view deleted successfully',
    };
  }
}