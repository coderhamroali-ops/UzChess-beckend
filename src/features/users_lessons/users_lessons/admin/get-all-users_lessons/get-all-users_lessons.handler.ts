import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { UsersLessonsEntity } from '../../../entities/users_lessons.entities';
import { GetAllUsers_lessonsRequest } from './get-all-users_lessons.request';

@Injectable()
export class GetAllUsersLessonsHandler {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllUsers_lessonsRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await UsersLessonsEntity.count();

    const totalPages = Math.ceil(
      totalCount / take,
    );

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await UsersLessonsEntity.find({
      select: {
        id: true,
        userId: true,
        courseLessonId: true,
        stoppedAt: true,
        isCompleted: true,
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
    } as PaginatedResultDto<GetAllUsers_lessonsRequest>;
  }
}