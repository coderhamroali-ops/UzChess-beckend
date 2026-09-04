import { CreateDifficultiesRequest } from './create-difficulties.request';
import { DifficultiesEntities } from '../../../entities/difficulties.entities';
import { ILike } from 'typeorm';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class CreateDifficultiesHandler {
  async execute(payload: CreateDifficultiesRequest) {
    const titleExists = await DifficultiesEntities.existsBy({ title: ILike(payload.title), icon: ILike(payload.icon) });
    if (titleExists)
      throw new ConflictException('Title already exist');

    const newdifi = { title: payload.title, icon: payload.icon } as DifficultiesEntities;
    return await DifficultiesEntities.save(newdifi);
  }
}