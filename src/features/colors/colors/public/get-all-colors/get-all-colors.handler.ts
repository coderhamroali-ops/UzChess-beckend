import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { GetAllColorsRequest } from './get-all-colors.request';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { ColorsEntities } from '../../../entities/colors.entities';

@Injectable()
export class GetAllColorsHandlerP {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllColorsRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;


    const totalCount = await ColorsEntities.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await ColorsEntities.find({
      select: { title: true, color: true},
      take: take,
      skip: skip,
    });
    return {  totalCount, totalPages, data, hasPrevious, hasNext, currentPage } as PaginatedResultDto<GetAllColorsRequest>;
  }
}