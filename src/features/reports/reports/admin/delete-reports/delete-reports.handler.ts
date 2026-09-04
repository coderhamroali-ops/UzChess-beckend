import { NotFoundException } from '@nestjs/common';
import { ReportsEntity } from '../../../entities/reports.entities';

export class DeleteReportsHandler {

  async execute(id: number) {

    const report = await ReportsEntity.findOneBy({
      id,
    });

    if (!report) {
      throw new NotFoundException(
        'Report not found',
      );
    }

    return await ReportsEntity.remove(report);
  }
}