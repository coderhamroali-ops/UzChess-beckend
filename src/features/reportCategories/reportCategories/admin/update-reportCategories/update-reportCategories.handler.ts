import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateReportCategoriesRequest } from './update-reportCategories.request';
import { ReportCategoriesEntities } from '../../../entities/reportCategories.entities';

@Injectable()
export class UpdateReportCategoriesHandler {
  async execute(
    id: number,
    payload: UpdateReportCategoriesRequest,
  ) {
    const category = await ReportCategoriesEntities.findOne({
      where: {
        id,
      },
    });

    if (!category) {
      throw new NotFoundException('Report category not found');
    }

    category.title = payload.title;
    category.order = payload.order;

    return await category.save();
  }
}