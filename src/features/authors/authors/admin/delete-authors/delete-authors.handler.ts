import { AuthorsEntities } from '../../../entities/authors.entities';
import { NotFoundException } from '@nestjs/common';

export class DeleteAuthorsHandler {
  async execute(id: number) {
    const categories = await AuthorsEntities.findOneBy({id: id});
    if (!categories)
      throw new NotFoundException('Authors');
    return await AuthorsEntities.remove(categories);
  }
}