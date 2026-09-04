import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllBookLikesRequest } from './get-all-bookLikes.request';
import { BookLikesEntity } from '../../../entities/bookLikes.entities';

@Injectable()
export class GetAllBookLikesHandler {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllBookLikesRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await BookLikesEntity.count();

    const totalPages = Math.ceil(
      totalCount / take,
    );

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await BookLikesEntity.find({
      select: {
        id: true,
        userId: true,
        bookId: true,
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
    } as PaginatedResultDto<GetAllBookLikesRequest>;
  }
}