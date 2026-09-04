import { ApiProperty } from '@nestjs/swagger';
import { CreateBookCategoriesRequest } from '../../Languges/book-categories/admin/create-book-category/create-book-categories.request';
import {Type as NestType} from "@nestjs/common"

export class PaginatedResultDto<T> {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
  data: T[];
}

export function PaginatedResultDtoT<T>(Dto: NestType<T>) {
   class PaginatedResultDto {
    @ApiProperty()
    totalCount: number;

    @ApiProperty()
    totalPages: number;

    @ApiProperty()
    currentPage: number;

    @ApiProperty()
    hasPrevious: boolean;

    @ApiProperty()
    hasNext: boolean;

    @ApiProperty({ type: [Dto] })
    data: T[];
  }
  return PaginatedResultDto;

}