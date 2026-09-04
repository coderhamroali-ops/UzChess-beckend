import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Not, Repository } from 'typeorm';

import { UpdateBooksRequest } from './update-books.request';
import { BooksEntity } from '../../../entities/books.entities';

@Injectable()
export class UpdateBooksHandler {
  constructor(
    @InjectRepository(BooksEntity)
    private readonly booksRepository: Repository<BooksEntity>,
  ) {}

  async execute(id: number, payload: UpdateBooksRequest) {
    const book = await this.booksRepository.findOneBy({
      id,
    });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    const titleExists = await this.booksRepository.exists({
      where: {
        id: Not(book.id),
        title: ILike(payload.title),
      },
    });

    if (titleExists) {
      throw new ConflictException(
        'Book with this title already exists',
      );
    }

    book.title = payload.title;

    return await this.booksRepository.save(book);
  }
}