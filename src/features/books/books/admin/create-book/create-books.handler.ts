import { BooksEntity } from '../../../entities/books.entities';
import { ILike } from 'typeorm';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class CreateBooksHandler {
  async execute(
    authorId: number,
    categoryId: number,
    languageId: number,
    difficultyId: number,
    title: string,
    description: string,
    image: Express.Multer.File | undefined,
    price: number,
    newPrice?: number,
    rating?: number,
    reviewsCount?: number,
    pages?: number,
    pubDate?: number,
  ) {
    const titleExists = await BooksEntity.existsBy({
      title: ILike(title),
    });

    if (titleExists) {
      throw new ConflictException(
        'Book with this title already exists',
      );
    }

    const newBook = {
      authorId,
      categoryId,
      languageId,
      difficultyId,
      title,
      description,
      image: image?.path,
      price,
      newPrice,
      rating,
      reviewsCount: reviewsCount ?? 0,
      pages,
      pubDate,
    } as BooksEntity;

    return await BooksEntity.save(newBook);
  }
}