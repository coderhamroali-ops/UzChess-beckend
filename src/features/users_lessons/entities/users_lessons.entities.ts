import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('users_lessons')
export class UsersLessonsEntity extends BaseModel {

  @Column()
  userId: number;

  @Column()
  courseLessonId: number;

  @Column({
    nullable: true,
  })
  stoppedAt?: number;

  @Column({
    default: false,
  })
  isCompleted: boolean;
}