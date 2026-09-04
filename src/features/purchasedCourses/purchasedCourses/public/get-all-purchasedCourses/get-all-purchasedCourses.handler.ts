import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { PaginatedResultDto, PaginatedResultDtoT, } from '../../../../common/dto/paginated-result.dto';
import { PurchasedCoursesEntity } from '../../../entities/purchasedCourses.entities';
import { GetAllPurchasedCoursesReques } from './get-all-purchasedCourses.reques';


@Injectable()
export class GetAllPurchasedCoursesHandlerPub {

  @ApiOkResponse({
    type: PaginatedResultDtoT(
      GetAllPurchasedCoursesReques,
    ),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount =
      await PurchasedCoursesEntity.count();

    const totalPages = Math.ceil(
      totalCount / take,
    );

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await PurchasedCoursesEntity.find({
      select: {
        id: true,
        userId: true,
        courseId: true,
        isCompleted: true,
        date: true,
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
    } as PaginatedResultDto<GetAllPurchasedCoursesReques>;
  }
}