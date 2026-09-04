import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('souvenir_colors')
export class SouvenirColorsEntity extends BaseModel {

  @Column()
  souvenirId: number;

  @Column()
  colorId: number;
}