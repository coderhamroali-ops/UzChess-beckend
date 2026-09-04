import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('souvenir_images')
export class SouvenirImagesEntity extends BaseModel {

  @Column()
  souvenirId: number;

  @Column({ length: 128, })
  image: string;
}