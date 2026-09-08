import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CoursesEntities } from '../../../entities/courses-entities';

@Injectable()
export class CreateCoursesHandler {
  constructor(
    @InjectRepository(CoursesEntities)
    private readonly coursesRepository: Repository<CoursesEntities>,
  ) {}

  async execute(
    authorId: number,
    categoryId: number,
    languageId: number,
    difficultyId: number,
    title: string,
    image: Express.Multer.File | undefined,
    price: number,
    newPrice?: number,
    isPublished?: boolean,
    reviewsCount?: number,
    rating?: number,
    sectionsCount?: number,
    lessonsCount?: number,
  ) {
    const titleExists = await this.coursesRepository.existsBy({
      title: ILike(title),
    });

    if (titleExists) {
      throw new ConflictException(
        'Course with this title already exists',
      );
    }

    const newCourse = this.coursesRepository.create({
      authorId,
      categoryId,
      languageId,
      difficultyId,
      title,
      image: image?.path,
      price,
      newPrice,
      isPublished,
      reviewsCount: reviewsCount ?? 0,
      rating,
      sectionsCount,
      lessonsCount,
    });

    return await this.coursesRepository.save(newCourse);
  }
}