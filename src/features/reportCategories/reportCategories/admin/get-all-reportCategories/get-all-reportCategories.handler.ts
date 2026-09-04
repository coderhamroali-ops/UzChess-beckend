import { ApiOkResponse } from '@nestjs/swagger';
import { Injectable } from '@nestjs/common';

import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllReportCategoriesRequest } from './get-all-reportCategories.request';
import { ReportCategoriesEntities } from '../../../entities/reportCategories.entities';



@Injectable()
export class GetAllReportCategoriesHandler {
  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllReportCategoriesRequest),
  })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await ReportCategoriesEntities.count();
    const totalPages = Math.ceil(totalCount / take);

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await ReportCategoriesEntities.find({
      select: {
        title: true,
        order: true,
      },
      take: take,
      skip: skip,
      order: {
        order: 'ASC',
      },
    });

    return {
      totalCount,
      totalPages,
      data,
      hasPrevious,
      hasNext,
      currentPage,
    } as PaginatedResultDto<GetAllReportCategoriesRequest>;
  }
}