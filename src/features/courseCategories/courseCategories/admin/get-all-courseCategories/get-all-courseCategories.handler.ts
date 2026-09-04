import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { GetAllCourseCategoriesRequest } from './get-all-courseCategories.request';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { CourseCategoriesEntities } from '../../../entities/courseCategories.entities';

@Injectable()
export class GetAllCourseCategoriesHandler {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllCourseCategoriesRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;


    const totalCount = await CourseCategoriesEntities.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await CourseCategoriesEntities.find({
      select: { title: true },
      take: take,
      skip: skip,
    });
    return { totalCount, totalPages, data, hasPrevious, hasNext, currentPage } as PaginatedResultDto<GetAllCourseCategoriesRequest>;
  }
}