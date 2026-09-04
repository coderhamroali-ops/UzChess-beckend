import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { AuthorsEntities } from '../../../entities/authors.entities';
import { GetAllAuthorsRequest } from './get-all-authors.request';
import { Injectable } from '@nestjs/common';


@Injectable()
export class GetAllAuthorsHandler {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllAuthorsRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;


    const totalCount = await AuthorsEntities.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await AuthorsEntities.find({
      select: { fullName: true },
      take: take,
      skip: skip,
    });

    return { totalPages, totalCount, currentPage, data, hasNext, hasPrevious } as PaginatedResultDto<GetAllAuthorsRequest>;
  }
}