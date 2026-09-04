import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Not } from 'typeorm';
import { UpdateDifficultiesRequest } from './update-difficulties.request';
import { DifficultiesEntities } from '../../../entities/difficulties.entities';

@Injectable()
export class UpdateDifficultiesHandler {
  async execute(id: number, payload: UpdateDifficultiesRequest) {
    const category = await DifficultiesEntities.findOneBy({id: id});

    if (!category) {
      throw new NotFoundException('Book category not found');
    }

    const titleExists = await DifficultiesEntities.exists({
      where: { id: Not(category.id), title: ILike(payload.title)},
    });
    const titleExistsi = await DifficultiesEntities.exists({
      where: { id: Not(category.id), icon: ILike(payload.icon)},
    });

    if (titleExists) {
      throw new ConflictException('Title');
    }
    if (titleExistsi) {
      throw new ConflictException('icon');
    }

    category.title = payload.title;
    category.icon = payload.icon;

    return await DifficultiesEntities.save(category);
  }
}