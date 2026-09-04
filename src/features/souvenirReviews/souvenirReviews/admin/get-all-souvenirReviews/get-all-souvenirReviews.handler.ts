import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { Injectable } from '@nestjs/common';
import { GetAllSouvenirReviewsRequest } from './get-all-souvenirReviews.request';
import { SouvenirReviewsEntity } from '../../../entities/souvenirReviews.entities';

@Injectable()
export class GetAllSouvenirReviewsHandler {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllSouvenirReviewsRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await SouvenirReviewsEntity.count();

    const totalPages = Math.ceil(totalCount / take);

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await SouvenirReviewsEntity.find({
      select: {
        id: true,
        userId: true,
        souvenirId: true,
        rating: true,
        comment: true,
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
    } as PaginatedResultDto<GetAllSouvenirReviewsRequest>;
  }
}