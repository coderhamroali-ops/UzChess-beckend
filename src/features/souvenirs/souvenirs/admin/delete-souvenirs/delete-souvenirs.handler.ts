import { NotFoundException } from '@nestjs/common';
import { SouvenirsEntities } from '../../../entities/souvenirs.entities';

export class DeleteSouvenirsHandler {
  async execute(id: number) {
    const souvenir = await SouvenirsEntities.findOneBy({
      id: id,
    });

    if (!souvenir) {
      throw new NotFoundException('Souvenir not found');
    }

    return await SouvenirsEntities.remove(souvenir);
  }
}