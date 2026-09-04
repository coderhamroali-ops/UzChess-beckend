import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { ReportsEntity } from '../../../entities/reports.entities';
import { UpdateReportsRequest } from './update-reports.request';

@Injectable()
export class UpdateReportsHandler {

  async execute(
    id: number,
    payload: UpdateReportsRequest,
  ) {

    const report = await ReportsEntity.findOneBy({
      id,
    });

    if (!report) {
      throw new NotFoundException(
        'Report not found',
      );
    }

    const reportExists = await ReportsEntity.exists({
      where: {
        id: Not(report.id),
        userId: payload.userId,
        categoryId: payload.categoryId,
        target: payload.target,
        targetId: payload.targetId,
      },
    });

    if (reportExists) {
      throw new ConflictException(
        'This report already exists',
      );
    }

    report.userId = payload.userId;
    report.categoryId = payload.categoryId;
    report.target = payload.target;
    report.targetId = payload.targetId;
    report.description = payload.description;

    return await ReportsEntity.save(report);
  }
}