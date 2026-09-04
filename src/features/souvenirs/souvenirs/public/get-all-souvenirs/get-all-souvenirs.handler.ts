import { ApiOkResponse } from '@nestjs/swagger';
import { Injectable } from '@nestjs/common';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllSouvenirsRequest } from './get-all-souvenirs.request';
import { SouvenirsEntities } from '../../../entities/souvenirs.entities';

@Injectable()
export class GetAllSouvenirsHandlerPub {
  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllSouvenirsRequest),
  })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 10;
    const skip = (currentPage - 1) * take;

    const totalCount = await SouvenirsEntities.count();

    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await SouvenirsEntities.find({
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
      },
      take,
      skip,
      order: {
        id: 'DESC',
      },
    });

    return {
      totalCount,
      totalPages,
      data,
      hasPrevious,
      hasNext,
      currentPage,
    } as PaginatedResultDto<GetAllSouvenirsRequest>;
  }
}