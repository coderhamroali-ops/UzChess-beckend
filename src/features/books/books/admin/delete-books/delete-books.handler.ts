import { BooksEntity } from '../../../entities/books.entities';
import { NotFoundException } from '@nestjs/common';

export class DeleteBooksHandler {
  async execute(id: number) {
    const categories = await BooksEntity.findOneBy({id: id});
    if (!categories)
      throw new NotFoundException('Language');
    return await BooksEntity.remove(categories);
  }
}