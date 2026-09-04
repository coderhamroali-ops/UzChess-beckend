import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ILike, Not } from 'typeorm';
import { UpdateSouvenirsRequest } from './update-souvenirs.request';
import { SouvenirsEntities } from '../../../entities/souvenirs.entities';

@Injectable()
export class UpdateSouvenirsHandler {
  async execute(id: number, payload: UpdateSouvenirsRequest) {
    const souvenir = await SouvenirsEntities.findOneBy({
      id: id,
    });

    if (!souvenir) {
      throw new NotFoundException('Souvenir not found');
    }

    const titleExists = await SouvenirsEntities.exists({
      where: {
        id: Not(souvenir.id),
        title: ILike(payload.title),
        description: ILike(payload.description),
      },
    });

    if (titleExists) {
      throw new ConflictException('Title');
    }

    souvenir.title = payload.title;
    souvenir.description = payload.description;
    souvenir.price = payload.price;

    return await SouvenirsEntities.save(souvenir);
  }
}