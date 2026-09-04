import { CreateCountriesRequest } from './create-countries.request';
import { CountriesEntities } from '../../../entities/countries.entities';
import { ILike } from 'typeorm';
import { ConflictException } from '@nestjs/common';

export class CreateCountriesHandler {
  async execute(payload: CreateCountriesRequest) {
    const titleExists = await CountriesEntities.existsBy({ title: ILike(payload.title), flag: ILike(payload.flag)});
    if (titleExists)
      throw new ConflictException('Title already exists');

    const newcountries = { title: payload.title, flag: payload.flag } as CountriesEntities;
    return await CountriesEntities.save(newcountries);
  }
}