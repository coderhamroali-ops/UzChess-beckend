import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { Injectable } from '@nestjs/common';
import { DifficultiesEntities } from '../../../entities/difficulties.entities';
import { GetAllDifficultiesRequest } from './get-all-difficulties-request';


@Injectable()
export class GetAllDifficultiesHandlerP {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllDifficultiesRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;


    const totalCount = await DifficultiesEntities.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await DifficultiesEntities.find({
      select: { title: true },
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
    } as PaginatedResultDto<GetAllDifficultiesRequest>;
  }
}