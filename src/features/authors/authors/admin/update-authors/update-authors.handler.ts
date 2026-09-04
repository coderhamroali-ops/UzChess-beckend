import { AuthorsEntities } from '../../../entities/authors.entities';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { ILike, Not } from 'typeorm';
import { UpdateAuthorsRequest } from './update-authors.request';

export class UpdateAuthorsHandler {
  async execute(id: number, payload: UpdateAuthorsRequest) {
    const category = await AuthorsEntities.findOneBy({id: id});

    if (!category){
      throw new NotFoundException('authors category not found');
    }

    const titleExists = await AuthorsEntities.exists({
      where: { id: Not(category.id), fullName: ILike(payload.fullName)},
    });

    if (titleExists) {
      throw new ConflictException('FullName')
    }

    category.fullName = payload.fullName;

    return await AuthorsEntities.save(category);
  }
}