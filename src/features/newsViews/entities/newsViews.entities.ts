import { BaseModel } from '../../../core/BaseModel';
import { Column, Entity } from 'typeorm';

@Entity('NewsViews')
export class NewsViewsEntities extends BaseModel {
  @Column()
  userId: number;

  @Column()
  newsId: number;

  @Column({ type: 'timestamp'})
  firstDate: Date;

  @Column({ type: 'timestamp'})
  lastDate: Date;

  @Column({ default: 1 })
  count: number;

}
