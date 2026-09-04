import { ILike } from 'typeorm';
import { ConflictException, Injectable } from '@nestjs/common';
import { CreateLanguagesRequest } from './create-languages.request';
import { LanguagesEntities } from '../../../entities/languages.entities';

@Injectable()
export class CreateLanguagesHandler {
  async execute(payload: CreateLanguagesRequest) {
    const titleExists = await LanguagesEntities.existsBy({ title: ILike(payload.title), code: ILike(payload.code)});
    if (titleExists)
      throw new ConflictException('Title already exists');

    const newcategories = { title: payload.title, code:payload.code} as LanguagesEntities;
    return await LanguagesEntities.save(newcategories);
  }
}