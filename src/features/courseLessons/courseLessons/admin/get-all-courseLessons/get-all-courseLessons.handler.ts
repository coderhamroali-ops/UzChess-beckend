import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllCourseLessonsRequest } from './get-all-courseLessons.request';
import { CourseLessonsEntity } from '../../../entities/courseLessons.entities';

@Injectable()
export class GetAllCourseLessonsHandler {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllCourseLessonsRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await CourseLessonsEntity.count();

    const totalPages = Math.ceil(
      totalCount / take,
    );

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await CourseLessonsEntity.find({
      select: {
        id: true,
        courseId: true,
        courseSectionId: true,
        title: true,
        content: true,
        thumbnail: true,
        video: true,
        order: true,
        date: true,
        isFree: true,
      },
      take,
      skip,
    });

    return {
      totalCount,
      totalPages,
      data,
      hasPrevious,
      hasNext,
      currentPage,
    } as PaginatedResultDto<GetAllCourseLessonsRequest>;
  }
}