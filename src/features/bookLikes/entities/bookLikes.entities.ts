import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('book_likes')
export class BookLikesEntity extends BaseModel {

  @Column()
  userId: number;

  @Column()
  bookId: number;

}