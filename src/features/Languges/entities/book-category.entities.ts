import { BaseModel } from '../../../core/BaseModel';
import { Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('book-categories')
export class Entitybook extends BaseModel {
  @ApiProperty()
  @Column({ length: 64, unique: true })
  title: string;
}