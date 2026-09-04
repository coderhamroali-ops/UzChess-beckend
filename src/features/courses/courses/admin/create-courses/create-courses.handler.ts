import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { CreateCoursesRequest } from './create-courses.request';
import { CoursesEntities } from '../../../entities/courses-entities';

@Injectable()
export class CreateCoursesHandler {
  constructor(
    @InjectRepository(CoursesEntities)
    private readonly coursesRepository: Repository<CoursesEntities>,
  ) {}

  async execute(payload: CreateCoursesRequest) {
    const titleExists = await this.coursesRepository.existsBy({
      title: ILike(payload.title),
    });

    if (titleExists)
      throw new ConflictException('Course with this title already exists');

    const newCourse = this.coursesRepository.create({
      authorId: payload.authorId,
      categoryId: payload.categoryId,
      languageId: payload.languageId,
      difficultyId: payload.difficultyId,
      title: payload.title,
      image: payload.image,
      price: payload.price,
      newPrice: payload.newPrice,
      isPublished: payload.isPublished,
      reviewsCount: payload.reviewsCount,
      rating: payload.rating,
      sectionsCount: payload.sectionsCount,
      lessonsCount: payload.lessonsCount,
    });

    return await this.coursesRepository.save(newCourse);
  }
}