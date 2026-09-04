import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateColorsRequest } from './update-colors.request';
import { ColorsEntities } from '../../../entities/colors.entities';
import { ILike, Not } from 'typeorm';

@Injectable()
export class UpdateColorsHandler {
  async execute(id: number, payload: UpdateColorsRequest) {
    const category = await ColorsEntities.findOneBy({id: id});

    if (!category) {
      throw new NotFoundException('Colors category not found');
    }

    const titleExists = await ColorsEntities.exists({
      where: { id: Not(category.id), title: ILike(payload.title), color: ILike(payload.color)},
    });

    if (titleExists) {
      throw new ConflictException('Title');
    }

    category.title = payload.title
    category.color = payload.color

    return await ColorsEntities.save(category);
  }
}