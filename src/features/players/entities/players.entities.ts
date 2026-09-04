import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';

@Entity('players')
export class PlayersEntities extends BaseModel {

  @Column({})
  countryId: number;

  @Column({length: 64})
  fulName: string;

  @Column({length: 128, nullable: false})
  image: string;

  @Column({nullable: true})
  classic: number;

  @Column({ nullable: true })
  rapid: number;

  @Column({ nullable: true })
  blitz: number;
}