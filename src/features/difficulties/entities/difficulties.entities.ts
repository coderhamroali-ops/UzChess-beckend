import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('difficulties')
export class DifficultiesEntities extends BaseModel {

  @Column({ length: 64, unique: true })
  title: string;

  @Column({ length: 128 })
  icon: string;
}