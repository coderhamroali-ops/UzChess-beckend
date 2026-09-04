import { ConflictException, Injectable } from '@nestjs/common';
import { ILike } from 'typeorm';
import { CreateSouvenirsRequest } from './create-souvenirs.request';
import { SouvenirsEntities } from '../../../entities/souvenirs.entities';

@Injectable()
export class CreateSouvenirsHandler {
  async execute(payload: CreateSouvenirsRequest) {
    const titleExists = await SouvenirsEntities.existsBy({
      title: ILike(payload.title),
    });

    if (titleExists) {
      throw new ConflictException('Title already exists');
    }

    const newSouvenir = {
      title: payload.title,
      description: payload.description,
      price: payload.price,
    } as SouvenirsEntities;

    return await SouvenirsEntities.save(newSouvenir);
  }
}