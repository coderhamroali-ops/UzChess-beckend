import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('course_lessons')
export class CourseLessonsEntity extends BaseModel {

  @Column()
  courseId: number;

  @Column()
  courseSectionId: number;

  @Column({length: 128, })
  title: string;

  @Column({ type: 'text', nullable: true, })
  content?: string;

  @Column({ length: 128, nullable: true, })
  thumbnail?: string;

  @Column({ length: 256, })
  video: string;

  @Column({ nullable: true, })
  order?: number;

  @Column({ type: 'timestamp', })
  date: Date;

  @Column({ default: false, })
  isFree: boolean;
}