import { Injectable, NotFoundException } from '@nestjs/common';
import { NewsEntities } from '../../../entities/news.entities';

@Injectable()
export class GetOneNewsHandlerPub {
  async execute(id: number) {
    const news = await NewsEntities.findOne({
      where: { id },
      select: { id: true, title: true, image: true, content: true, date: true },
    });
    if (!news)
      throw new NotFoundException('News');
    return news;
  }
}
