import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { PurchasedCoursesEntity } from '../../../entities/purchasedCourses.entities';
import { GetMyPurchasedCoursesRequest } from './get-my-purchases.request';

@Injectable()
export class GetMyPurchasesHandler {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetMyPurchasedCoursesRequest),
  })
  async execute(userId: number, query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 10;
    const skip = (currentPage - 1) * take;

    const totalCount = await PurchasedCoursesEntity.countBy({ userId });

    const totalPages = Math.ceil(totalCount / take);

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await PurchasedCoursesEntity.find({
      where: { userId },
      select: {
        id: true,
        courseId: true,
        isCompleted: true,
        date: true,
      },
      order: { id: 'DESC' },
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
    } as PaginatedResultDto<GetMyPurchasedCoursesRequest>;
  }
}