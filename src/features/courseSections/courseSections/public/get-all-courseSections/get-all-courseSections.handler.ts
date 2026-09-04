import { ApiOkResponse } from '@nestjs/swagger';
import { Injectable } from '@nestjs/common';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllCourseSectionsRequest } from './get-all-courseSections.request';
import { CourseSectionsEntity } from '../../../entities/courseSections.entities';

@Injectable()
export class GetAllCourseSectionsHandlerPub {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllCourseSectionsRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await CourseSectionsEntity.count();

    const totalPages = Math.ceil(totalCount / take);

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await CourseSectionsEntity.find({
      select: {
        id: true,
        courseId: true,
        title: true,
        order: true,
        date: true,
      },
      take: take,
      skip: skip,
    });

    return {
      totalCount,
      totalPages,
      data,
      hasPrevious,
      hasNext,
      currentPage,
    } as PaginatedResultDto<GetAllCourseSectionsRequest>;
  }
}