import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';
import { ApiProperty } from '@nestjs/swagger';

@Entity('authors')
export class AuthorsEntities extends BaseModel {

  @Column({ length: 64 })
  @ApiProperty()
  fullName: string;
}