import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { Injectable } from '@nestjs/common';
import { GetAllNewsRequest } from './get-all-news.request';
import { NewsEntities } from '../../../entities/news.entities';


@Injectable()
export class GetAllNewsHandler {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllNewsRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;



    const totalCount = await NewsEntities.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await NewsEntities.find({
      select: { title: true, content: true, image: true, date: true},
      take: take,
      skip: skip,
    });

    return { totalCount, totalPages, data, hasPrevious, hasNext, currentPage } as PaginatedResultDto<GetAllNewsRequest>;
  }
}