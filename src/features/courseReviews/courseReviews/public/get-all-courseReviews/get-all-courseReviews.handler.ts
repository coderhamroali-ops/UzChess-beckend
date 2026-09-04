import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllCourseReviewsRequest } from './get-all-courseReviews.request';
import { CourseReviewsEntity } from '../../../entities/courseReviews.entities';

@Injectable()
export class GetAllCourseReviewsHandlerPub {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllCourseReviewsRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await CourseReviewsEntity.count();

    const totalPages = Math.ceil(
      totalCount / take,
    );

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await CourseReviewsEntity.find({
      select: {
        id: true,
        userId: true,
        courseId: true,
        rating: true,
        comment: true,
        created: true,
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
    } as PaginatedResultDto<GetAllCourseReviewsRequest>;
  }
}