import { Injectable, NotFoundException } from '@nestjs/common';
import { ReportCategoriesEntities } from '../../../entities/reportCategories.entities';

@Injectable()
export class DeleteReportCategoriesHandler {
  async execute(id: number) {
    const category = await ReportCategoriesEntities.findOne({
      where: {
        id,
      },
    });

    if (!category) {
      throw new NotFoundException('Report category not found');
    }

    await ReportCategoriesEntities.delete(id);

    return {
      message: 'Report category deleted successfully',
    };
  }
}