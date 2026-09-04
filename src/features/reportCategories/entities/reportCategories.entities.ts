import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('reportCategories')
export class ReportCategoriesEntities extends BaseModel {

  @Column({ length: 64, unique: true })
  title: string;

  @Column({ nullable: false })
  order: number;
}