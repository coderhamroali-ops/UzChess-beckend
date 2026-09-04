import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllBookReviewsRequest } from './get-all-bookReviews.request';
import { BookReviewsEntity } from '../../../entities/bookReviews.entities';

@Injectable()
export class GetAllBookReviewsHandlerPub {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllBookReviewsRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await BookReviewsEntity.count();

    const totalPages = Math.ceil(
      totalCount / take,
    );

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await BookReviewsEntity.find({
      select: {
        id: true,
        userId: true,
        bookId: true,
        rating: true,
        comment: true,
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
    } as PaginatedResultDto<GetAllBookReviewsRequest>;
  }
}