import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllSouvenirImagesRequest } from './get-all-souvenirImages.request';
import { Injectable } from '@nestjs/common';
import { SouvenirImagesEntity } from '../../../entities/souvenirImages.entities';

@Injectable()
export class GetAllSouvenirImagesHandler {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllSouvenirImagesRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await SouvenirImagesEntity.count();

    const totalPages = Math.ceil(totalCount / take);

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await SouvenirImagesEntity.find({
      select: {
        id: true,
        souvenirId: true,
        image: true,
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
    } as PaginatedResultDto<GetAllSouvenirImagesRequest>;
  }
}