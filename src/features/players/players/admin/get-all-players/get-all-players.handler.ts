import { GetAllPlayersRequest } from './get-all-players.request';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { PlayersEntities } from '../../../entities/players.entities';

@Injectable()
export class GetAllPlayersHandler {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllPlayersRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await PlayersEntities.count();
    const totalPages = Math.ceil(totalCount / take);

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await PlayersEntities.find({
      select: {
        countryId: true,
        fulName: true,
        image: true,
        classic: true,
        rapid: true,
        blitz: true,
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
    } as PaginatedResultDto<GetAllPlayersRequest>;
  }
}