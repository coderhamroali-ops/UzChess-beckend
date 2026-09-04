import { Injectable } from '@nestjs/common';
import { NewsViewsEntities } from '../../../entities/newsViews.entities';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { GetAllNewsViewsReques } from './get-all-NewsViews.reques';

@Injectable()
export class GetAllNewsViewsHandler {
  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllNewsViewsReques),
  })
  async execute(query: GetAllNewsViewsReques) {
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