import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('souvenir_reviews')
export class SouvenirReviewsEntity extends BaseModel {

  @Column()
  userId: number;

  @Column()
  souvenirId: number;

  @Column()
  rating: number;

  @Column({ length: 512, nullable: true, })
  comment?: string;
}