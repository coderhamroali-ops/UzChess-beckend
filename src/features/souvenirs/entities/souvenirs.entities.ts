import { BaseModel } from '../../../core/BaseModel';
import { Column, Entity } from 'typeorm';

@Entity()
export class SouvenirsEntities extends BaseModel {

  @Column({ length: 128 })
  title: string;

  @Column({type: 'text'})
  description: string;

  @Column({type: 'decimal', precision: 12, scale: 2})
  price: number;
}