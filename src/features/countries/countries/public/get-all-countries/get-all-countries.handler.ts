import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { GetAllCountriesRequest } from './get-all-countries.request';
import { CountriesEntities } from '../../../entities/countries.entities';


@Injectable()
export class GetAllCountriesHandlerP {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllCountriesRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;



    const totalCount = await CountriesEntities.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await CountriesEntities.find({
      select: { title: true, flag: true},
      take: take,
      skip: skip,
    });

    return { totalCount, totalPages, data, hasPrevious, hasNext, currentPage } as PaginatedResultDto<GetAllCountriesRequest>;
  }
}