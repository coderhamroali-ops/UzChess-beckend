import { NotFoundException } from '@nestjs/common';
import { CountriesEntities } from '../../../entities/countries.entities';

export class DeleteCountriesHandler {
  async execute(id: number) {
    const categories = await CountriesEntities.findOneBy({ id: id });
    if (!categories)
      throw new NotFoundException('Language');
    return await CountriesEntities.remove(categories);
  }
}