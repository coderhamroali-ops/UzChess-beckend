import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('course_likes')
export class CourseLikesEntity extends BaseModel {

  @Column()
  userId: number;

  @Column()
  courseId: number;

  @Column({
    type: 'timestamp',
  })
  created: Date;
}