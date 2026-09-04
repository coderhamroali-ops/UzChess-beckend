import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('News')
export class NewsEntities extends BaseModel {

  @Column({ length: 265 })
  title: string;

  @Column({ length: 128 })
  image: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'timestamp'})
  date: Date;

}