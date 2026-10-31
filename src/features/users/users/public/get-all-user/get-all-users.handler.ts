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
export class GetAllUsersHandlerPub {
  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllUsersRequest),
  })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 10;
    const skip = (currentPage - 1) * take;

    const totalCount = await UsersEntities.count({ where: { isActive: true } });

    const totalPages = Math.ceil(totalCount / take);

    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await UsersEntities.find({
      // Ommaviy ro'yxatda shaxsiy ma'lumotlar (login, rol, tug'ilgan sana) berilmaydi
      where: { isActive: true },
      select: {
        id: true,
        fullName: true,
        profileImage: true,
      },
      take: take,
      skip: skip,
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
