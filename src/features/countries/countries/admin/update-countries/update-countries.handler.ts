import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Not } from 'typeorm';
import { UpdateCountriesRequest } from './update-countries.request';
import { ColorsEntities } from '../../../../colors/entities/colors.entities';
import { CountriesEntities } from '../../../entities/countries.entities';

@Injectable()
export class UpdateCountriesHandler {
  async execute(id: number, payload: UpdateCountriesRequest) {
    const category = await ColorsEntities.findOneBy({id: id});

    if (!category) {
      throw new NotFoundException('counties category not found');
    }

    const titleExists = await CountriesEntities.exists({
      where: { id: Not(category.id), title: ILike(payload.title), flag: ILike(payload.flag)},
    });

    if (titleExists) {
      throw new ConflictException('Title');
    }

    category.title = payload.title;


    return await CountriesEntities.save(category);
  }
}