import { Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PaginatedResultDto, PaginatedResultDtoT } from '../../../../common/dto/paginated-result.dto';
import { GetAllBooksRequest } from './get-all-books.request';
import { PaginationFilters } from '../../../../common/pagination.filter';
import { BooksEntity } from '../../../entities/books.entities';

@Injectable()
export class GetAllBooksHandler {
  @ApiOkResponse({ type: PaginatedResultDtoT(GetAllBooksRequest) })
  async execute(query: PaginationFilters) {
    const currentPage = query.page ?? 1;
    const take = query.size ?? 3;
    const skip = (currentPage - 1) * take;


    const totalCount = await BooksEntity.count();
    const totalPages = Math.ceil(totalCount / take);
    const hasNext = currentPage < totalPages;
    const hasPrevious = currentPage > 1;

    const data = await BooksEntity.find({
      select: {
        authorId: true,
        categoryId: true,
        languageId: true,
        difficultyId: true,
        title: true,
        description: true,
        image: true,
        price: true,
        newPrice: true,
        rating: true,
        reviewsCount: true,
        pages: true,
        pubDate: true,
      },
      take: take,
      skip: skip,

    });

    for (let news of data) {
      news.image = 'http://localhost:8000' + '/' + news.image;
    }
    return {
      totalPages,
      totalCount,
      currentPage,
      data,
      hasNext,
      hasPrevious,
    } as PaginatedResultDto<GetAllBooksRequest>;
  }
}