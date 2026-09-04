import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Not } from 'typeorm';
import { UpdateLanguagesRequest } from './update-languages.request';
import { LanguagesEntities } from '../../../entities/languages.entities';

@Injectable()
export class UpdateLanguagesHandler {
  async execute(id: number, payload: UpdateLanguagesRequest) {
    const category = await LanguagesEntities.findOneBy({ id: id });

    if (!category) {
      throw new NotFoundException('Book category not found');
    }

    const titleExists = await LanguagesEntities.exists({
      where: { id: Not(category.id), title: ILike(payload.title), code: ILike(payload.code) },
    });

    if (titleExists) {
      throw new ConflictException('Title');
    }

    category.title = payload.title;
    category.code = payload.code;

    return await LanguagesEntities.save(category);
  }
}