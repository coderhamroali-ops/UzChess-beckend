import { Injectable, NotFoundException } from '@nestjs/common';
import { MatchesEntities } from '../../../entities/matches.entities';
import { UpdateMatchesRequest } from './update-matches.request';

@Injectable()
export class UpdateMatchesHandler {
  async execute(id: number, payload: UpdateMatchesRequest) {
    const match = await MatchesEntities.findOne({
      where: { id },
    });

    if (!match) {
      throw new NotFoundException('Match not found');
    }

    match.firstPlayer = payload.firstPlayer;
    match.firstPlayerResult = payload.firstPlayerResult;
    match.secondPlayer = payload.secondPlayer;
    match.secondPlayerResult = payload.secondPlayerResult;
    match.type = payload.type;
    match.moves = payload.moves;
    match.date = payload.date;
    match.winner = payload.winner;

    return await MatchesEntities.save(match);
  }
}