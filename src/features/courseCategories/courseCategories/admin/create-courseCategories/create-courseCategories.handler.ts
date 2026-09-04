import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { CreateCourseCategoriesRequest } from './create-courseCategories.request';
import { CourseCategoriesEntities } from '../../../entities/courseCategories.entities';

@Injectable()
export class CreateCourseCategoriesHandler {
  constructor(
    @InjectRepository(CourseCategoriesEntities)
    private readonly courseCategoriesRepository: Repository<CourseCategoriesEntities>,
  ) {}

  async execute(payload: CreateCourseCategoriesRequest) {
    const titleExists = await this.courseCategoriesRepository.existsBy({
      title: ILike(payload.title),
    });

    if (titleExists) {
      throw new ConflictException('Title already exists');
    }

    const newCategory = this.courseCategoriesRepository.create({
      title: payload.title,
    });

    return await this.courseCategoriesRepository.save(newCategory);
  }
}