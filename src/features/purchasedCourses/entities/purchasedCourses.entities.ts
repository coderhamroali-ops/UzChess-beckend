import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('purchased_courses')
export class PurchasedCoursesEntity extends BaseModel {

  @Column()
  userId: number;

  @Column()
  courseId: number;

  @Column({
    default: false,
  })
  isCompleted: boolean;

  @Column({
    type: 'timestamp',
  })
  date: Date;
}