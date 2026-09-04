import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('terms')
export class TermsEntity extends BaseModel {

  @Column({
    type: 'text',
  })
  content: string;
}