import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('Languages')
export class LanguagesEntities extends BaseModel {

  @Column({ length: 32, unique: true })
  title: string;

  @Column({ length: 6, unique: true })
  code: string;
}