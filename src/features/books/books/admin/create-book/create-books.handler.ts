import { ConflictException, Injectable } from '@nestjs/common';
import { CreateBooksRequest } from './create-books.request';
import { BooksEntity } from '../../../entities/books.entities';
import { ILike } from 'typeorm';

@Injectable()
export class CreateBooksHandler {
  async execute(payload: CreateBooksRequest) {
    const titleExists = await BooksEntity.existsBy({
      title: ILike(payload.title),
    });

    if (titleExists)
      throw new ConflictException('Book with this title already exists');


    const newBook = {
      authorId: payload.authorId,
      categoryId: payload.categoryId,
      languageId: payload.languageId,
      difficultyId: payload.difficultyId,
      title: payload.title,
      description: payload.description,
      image: payload.image,
      price: payload.price,
      newPrice: payload.newPrice,
      rating: payload.rating,
      reviewsCount: payload.reviewsCount ?? 0,
      pages: payload.pages,
      pubDate: payload.pubDate,
    } as BooksEntity;
    return await BooksEntity.save(newBook);
  }
}