import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { GetAllNewsViewsReques } from '../../admin/get-all-newsViews/get-all-NewsViews.reques';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { NewsViewsEntities } from '../../../entities/newsViews.entities';


@Injectable()
export class GetAllNewsViewsHandlerPub {
  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllNewsViewsReques),
  })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 10;
    const skip = (currentPage - 1) * take;

    const [data, totalCount] = await NewsViewsEntities.findAndCount({
      take,
      skip,
      order: {
        id: 'DESC',
      },
    });

    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    return {
      totalCount,
      totalPages,
      data,
      hasPrevious,
      hasNext,
      currentPage,
    } as PaginatedResultDto<GetAllNewsViewsReques>;
  }
}