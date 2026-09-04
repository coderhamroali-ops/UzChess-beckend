import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllSouvenirColorsRequest } from './get-all-souvenirColors.request';
import { Injectable } from '@nestjs/common';
import { SouvenirColorsEntity } from '../../../entities/souvenirColors.entities';

@Injectable()
export class GetAllSouvenirColorsHandlerPub {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllSouvenirColorsRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await SouvenirColorsEntity.count();

    const totalPages = Math.ceil(totalCount / take);

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await SouvenirColorsEntity.find({
      select: {
        id: true,
        souvenirId: true,
        colorId: true,
      },
      take: take,
      skip: skip,
    });

    return {
      totalCount,
      totalPages,
      data,
      hasPrevious,
      hasNext,
      currentPage,
    } as PaginatedResultDto<GetAllSouvenirColorsRequest>;
  }
}