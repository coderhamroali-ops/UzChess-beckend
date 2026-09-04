import { ConflictException, Injectable } from '@nestjs/common';
import { ILike } from 'typeorm';
import { CreateReportCategoriesRequest } from './create-reportCategories.request';
import { ReportCategoriesEntities } from '../../../entities/reportCategories.entities';

@Injectable()
export class CreateReportCategoriesHandler {
  async execute(payload: CreateReportCategoriesRequest) {
    const categoryExists = await ReportCategoriesEntities.existsBy({
      title: ILike(payload.title),
    });

    if (categoryExists) {
      throw new ConflictException('Report category already exists');
    }

    const newCategory = ReportCategoriesEntities.create({
      title: payload.title,
      order: payload.order,
    });

    return await newCategory.save();
  }
}