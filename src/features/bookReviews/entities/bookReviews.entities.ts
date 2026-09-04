import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('book_reviews')
export class BookReviewsEntity extends BaseModel {

  @Column()
  userId: number;

  @Column()
  bookId: number;

  @Column()
  rating: number;

  @Column({
    length: 512,
    nullable: true,
  })
  comment?: string;
}