import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { Injectable } from '@nestjs/common';
import { GetAllCoursesRequest } from './get-all-courses.request';
import { CoursesEntities } from '../../../entities/courses-entities';


@Injectable()
export class GetAllCoursesHandlerP {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllCoursesRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;



    const totalCount = await CoursesEntities.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await CoursesEntities.find({
      select: { authorId: true, categoryId: true, title: true, lessonsCount: true, sectionsCount: true, rating: true, reviewsCount: true, isPublished: true, newPrice: true, price: true, image: true, difficultyId: true, languageId: true },
      take: take,
      skip: skip,
    });

    return { totalCount, totalPages, data, hasPrevious, hasNext, currentPage } as PaginatedResultDto<GetAllCoursesRequest>;
  }
}