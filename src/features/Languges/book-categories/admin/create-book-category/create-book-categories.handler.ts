import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { CreateBookCategoriesRequest } from './create-book-categories.request';
import { Entitybook } from '../../../entities/book-category.entities';

@Injectable()
export class CreateBookCategoriesHandler {
  constructor(
    @InjectRepository(Entitybook)
    private readonly bookCategoryRepository: Repository<Entitybook>,
  ) {
  }

  async execute(payload: CreateBookCategoriesRequest) {
    const titleExists = await this.bookCategoryRepository.existsBy({
      title: ILike(payload.title),
    });

    if (titleExists) {
      throw new ConflictException('Title already exists');
    }

    const newCategory = this.bookCategoryRepository.create({
      title: payload.title,
    });

    return await this.bookCategoryRepository.save(newCategory);
  }
}