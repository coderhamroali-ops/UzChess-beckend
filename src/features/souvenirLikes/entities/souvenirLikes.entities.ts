import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('souvenir_likes')
export class SouvenirLikesEntity extends BaseModel {

  @Column()
  userId: number;

  @Column()
  souvenirId: number;
}