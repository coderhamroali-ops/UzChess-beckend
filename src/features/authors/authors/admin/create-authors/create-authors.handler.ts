import { AuthorsEntities } from '../../../entities/authors.entities';
import { ILike } from 'typeorm';
import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAuthorsRequest } from './create-authors.request';

@Injectable()
export class CreateAuthorsHandler {
  async execute(payload: CreateAuthorsRequest) {
    const titleExists = await AuthorsEntities.existsBy({ fullName: ILike(payload.fullName) });
    if (titleExists)
      throw new ConflictException('Title already exists');

    const newcategories = { fullName: payload.fullName } as AuthorsEntities;
    return await AuthorsEntities.save(newcategories);
  }
}