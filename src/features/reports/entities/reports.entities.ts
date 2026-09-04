import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';
import { reportType } from '../../../core/enum/enum';

@Entity('reports')
export class ReportsEntity extends BaseModel {

  @Column()
  userId: number;

  @Column()
  categoryId: number;

  @Column({ type: 'enum', enum: reportType, })
  target: reportType;

  @Column()
  targetId: number;

  @Column({ length: 256, nullable: true, })
  description?: string;
}