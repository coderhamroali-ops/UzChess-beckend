
import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';
import { MatchType, winnerType } from '../../../core/enum/enum';

@Entity('Matches')
export class MatchesEntities extends BaseModel {


  @Column()
  firstPlayer: number;

  @Column()
  firstPlayerResult: number;

  @Column()
  secondPlayer: number;

  @Column({})
  secondPlayerResult: number;

  @Column({ type: 'enum', enum: MatchType })
  type: MatchType;

  @Column()
  moves: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'enum', enum: winnerType })
  winner: winnerType;
}