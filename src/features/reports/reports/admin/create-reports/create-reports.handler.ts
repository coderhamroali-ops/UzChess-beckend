import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { ReportsEntity } from '../../../entities/reports.entities';
import { CreateReportsRequest } from './create-reports.request';

@Injectable()
export class CreateReportsHandler {

  async execute(payload: CreateReportsRequest) {

    const reportExists = await ReportsEntity.exists({
      where: {
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

    const newReport = ReportsEntity.create({
      userId: payload.userId,
      categoryId: payload.categoryId,
      target: payload.target,
      targetId: payload.targetId,
      description: payload.description,
    });

    return await ReportsEntity.save(newReport);
  }
}