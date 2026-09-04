import { Injectable } from '@nestjs/common';
import { MatchesEntities } from '../../../entities/matches.entities';
import { CreateMatchesRequest } from './create-matches.request';

@Injectable()
export class CreateMatchesHandler {
  async execute(payload: CreateMatchesRequest) {
    const newMatch = {
      firstPlayer: payload.firstPlayer,
      firstPlayerResult: payload.firstPlayerResult,
      secondPlayer: payload.secondPlayer,
      secondPlayerResult: payload.secondPlayerResult,
      type: payload.type,
      moves: payload.moves,
      date: payload.date,
      winner: payload.winner,
    } as MatchesEntities;

    return await MatchesEntities.save(newMatch);
  }
}