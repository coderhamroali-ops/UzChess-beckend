import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('course_reviews')
export class CourseReviewsEntity extends BaseModel {

  @Column()
  userId: number;

  @Column()
  courseId: number;

  @Column()
  rating: number;

  @Column({
    length: 512,
    nullable: true,
  })
  comment?: string;

  @Column({
    type: 'timestamp',
  })
  created: Date;
}