import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('coursesCategories')
export class CourseCategoriesEntities extends BaseModel {

  @Column({ length: 64, unique: true })
  title: string;
}