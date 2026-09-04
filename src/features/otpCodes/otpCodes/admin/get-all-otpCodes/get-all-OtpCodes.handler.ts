import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import {
  PaginatedResultDto,
  PaginatedResultDtoT,
} from '../../../../common/dto/paginated-result.dto';
import { GetAllOtpCodesRequest } from './get-all-OtpCodes.request';
import { OtpCodesEntity } from '../../../entities/otpCodes.entities';

@Injectable()
export class GetAllOtpCodesHandler {
  @ApiOkResponse({
    type: PaginatedResultDtoT(GetAllOtpCodesRequest),
  })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 10;
    const skip = (currentPage - 1) * take;

    const [data, totalCount] = await OtpCodesEntity.findAndCount({
      take,
      skip,
      order: {
        id: 'DESC',
      },
    });

    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    return {
      totalCount,
      totalPages,
      data,
      hasPrevious,
      hasNext,
      currentPage,
    } as PaginatedResultDto<GetAllOtpCodesRequest>;
  }
}