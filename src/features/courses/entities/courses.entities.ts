import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';
import { ApiProperty } from '@nestjs/swagger';

@Entity('courses')
export class CoursesEntities extends BaseModel {
  @Column()
  authorId: number;

  @Column()
  categoryId: number;

  @Column()
  languageId: number;

  @Column()
  difficultyId: number;

  @Column({ length: 128 })
  title: string;

  @Column({ length: 128 })
  @ApiProperty()
  image: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  @ApiProperty()
  price: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  newPrice?: number;

  @Column({ default: false })
  isPublished: boolean;

  @Column({ default: 0 })
  reviewsCount: number;

  @Column({
    type: 'decimal', precision: 2, scale: 1,
  })
  rating?: number;

  @Column({ default: 0 })
  sectionsCount: number;

  @Column({ default: 0 })
  lessonsCount: number;
}