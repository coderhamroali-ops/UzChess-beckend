import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllCartItemsRequest } from './get-all-cartItems.request';
import { CartItemsEntity } from '../../../entities/cartItems.entities';

@Injectable()
export class GetAllCartItemsHandler {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllCartItemsRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await CartItemsEntity.count();

    const totalPages = Math.ceil(
      totalCount / take,
    );

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await CartItemsEntity.find({
      select: {
        id: true,
        userId: true,
        target: true,
        targetId: true,
        quantity: true,
      },
      take,
      skip,
    });

    return {
      totalCount,
      totalPages,
      data,
      hasPrevious,
      hasNext,
      currentPage,
    } as PaginatedResultDto<GetAllCartItemsRequest>;
  }
}