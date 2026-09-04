import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllSouvenirLikesRequest } from './get-all-souvenirLikes.request';
import { SouvenirLikesEntity } from '../../../entities/souvenirLikes.entities';

@Injectable()
export class GetAllSouvenirLikesHandler {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllSouvenirLikesRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await SouvenirLikesEntity.count();

    const totalPages = Math.ceil(totalCount / take);

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await SouvenirLikesEntity.find({
      select: {
        id: true,
        userId: true,
        souvenirId: true,
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
    } as PaginatedResultDto<GetAllSouvenirLikesRequest>;
  }
}