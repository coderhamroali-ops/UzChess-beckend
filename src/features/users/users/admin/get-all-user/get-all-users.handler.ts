import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';

import { UsersEntities } from '../../../entities/users.entities';
import { GetAllUsersRequest } from './get-all-users.request';

@Injectable()
export class GetAllUsersHandler {

  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllUsersRequest),
  })
  async execute(query: PaginationFilters) {

    const currentPage = query.page ?? 1;
    const take = query.size ?? 10;
    const skip = (currentPage - 1) * take;

    const totalCount = await UsersEntities.count();

    const totalPages = Math.ceil(totalCount / take);

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await UsersEntities.find({
      select: {
        id: true,
        role: true,
        fullName: true,
        profileImage: true,
        login: true,
        loginType: true,
        birthDate: true,
        isVerified: true,
        isActive: true,
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
    } as PaginatedResultDto<GetAllUsersRequest>;
  }
}