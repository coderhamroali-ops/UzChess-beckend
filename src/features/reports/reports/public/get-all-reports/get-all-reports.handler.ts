import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { ReportsEntity } from '../../../entities/reports.entities';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllReportsRequest } from './get-all-reports.request';

@Injectable()
export class GetAllReportsHandlerPub {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllReportsRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await ReportsEntity.count();

    const totalPages = Math.ceil(
      totalCount / take,
    );

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await ReportsEntity.find({
      select: {
        id: true,
        userId: true,
        categoryId: true,
        target: true,
        targetId: true,
        description: true,
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
    } as PaginatedResultDto<GetAllReportsRequest>;
  }
}