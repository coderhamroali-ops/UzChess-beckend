import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { Entitybook } from '../../../entities/book-category.entities';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { GetAllBookCategoriesRequest } from './get-all-book-categories.request';

@Injectable()
export class GetAllBookCategoriesHandlerPup {
  constructor(
    @InjectRepository(Entitybook)
    private readonly bookCategoryRepository: Repository<Entitybook>,
  ) {}

  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllBookCategoriesRequest) })
  async execute(query: PaginationFilters): Promise<PaginatedResultDto<Entitybook>> {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;

    const totalCount = await this.bookCategoryRepository.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await this.bookCategoryRepository.find({
      select: { id: true, title: true },
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
    } as PaginatedResultDto<any>;
  }
}