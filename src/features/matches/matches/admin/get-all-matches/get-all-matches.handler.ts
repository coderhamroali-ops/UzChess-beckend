import { GetAllMatchesRequest } from './get-all-matches.request';


import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { Injectable } from '@nestjs/common';
import { MatchesEntities } from '../../../entities/matches.entities';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';


@Injectable()
export class GetAllMatchesHandler {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllMatchesRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;


    const totalCount = await MatchesEntities.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await MatchesEntities.find({
      select: {
        firstPlayer: true,
        firstPlayerResult: true,
        secondPlayer: true,
        secondPlayerResult: true,
        type: true,
        moves: true,
        date: true,
        winner: true,
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
    } as PaginatedResultDto<GetAllMatchesRequest>;
  }
}