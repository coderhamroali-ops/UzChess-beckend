import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { Entitybook } from '../../../entities/book-category.entities';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { GetAllBookCategoriesRequest } from './get-all-book-categories.request';
import { Injectable } from '@nestjs/common';


@Injectable()
export class GetAllBookCategoriesHandler {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllBookCategoriesRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;



    const totalCount = await Entitybook.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await Entitybook.find({
      select: { title: true },
      take: take,
      skip: skip,
    });

    return { totalCount, totalPages, data, hasPrevious, hasNext, currentPage } as PaginatedResultDto<GetAllBookCategoriesRequest>;
  }
}