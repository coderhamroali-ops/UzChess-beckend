import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { Injectable } from '@nestjs/common';
import { GetAllLanguagesRequest } from './get-all-Languages.request';
import { LanguagesEntities } from '../../../entities/languages.entities';


@Injectable()
export class GetAllLanguagesHandlerpublic {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllLanguagesRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;



    const totalCount = await LanguagesEntities.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await LanguagesEntities.find({
      select: { title: true, code: true },
      take: take,
      skip: skip,
    });

    return { totalCount, totalPages, data, hasPrevious, hasNext, currentPage } as PaginatedResultDto<GetAllLanguagesRequest>;
  }
}