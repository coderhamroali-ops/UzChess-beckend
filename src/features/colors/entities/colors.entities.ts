import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';
import { ApiProperty } from '@nestjs/swagger';

@Entity('colors')
export class ColorsEntities extends BaseModel {
  @Column({ length: 128, unique: true })
  @ApiProperty()
  title: string;

  @Column({ length: 10, unique: true})
  @ApiProperty()
  color: string;
}