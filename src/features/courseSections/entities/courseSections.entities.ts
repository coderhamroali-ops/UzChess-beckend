import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('course_sections')
export class CourseSectionsEntity extends BaseModel {

  @Column()
  courseId: number;

  @Column({ length: 256, })
  title: string;

  @Column({
    nullable: true,
  })
  order?: number;

  @Column({
    type: 'timestamp',
  })
  date: Date;
}