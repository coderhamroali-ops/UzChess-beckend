import { CreateColorsRequest } from './create-colors.request';
import { ColorsEntities } from '../../../entities/colors.entities';
import { ILike } from 'typeorm';
import { ConflictException } from '@nestjs/common';

export class CreateColorsHandler {
  async execute(payload: CreateColorsRequest) {
    const titleExists = await ColorsEntities.existsBy({ title: ILike(payload.title), color: ILike(payload.color) });
    if (titleExists)
      throw new ConflictException('Title already exists');

    const newcategories = { title: payload.title, color: payload.color} as ColorsEntities;
    return await ColorsEntities.save(newcategories);
  }
}