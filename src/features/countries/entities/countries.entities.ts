import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('countries')
export class CountriesEntities extends BaseModel {

  @Column({ length: 64, nullable: true })
  title: string;

  @Column({ length: 128, nullable: true })
  flag: string;
}