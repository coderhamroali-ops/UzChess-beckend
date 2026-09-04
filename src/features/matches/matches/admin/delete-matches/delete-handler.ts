import { Injectable, NotFoundException } from '@nestjs/common';
import { MatchesEntities } from '../../../entities/matches.entities';

@Injectable()
export class DeleteMatchesHandler {
  async execute(id: number) {
    const match = await MatchesEntities.findOne({
      where: { id },
    });

    if (!match) {
      throw new NotFoundException('Match not found');
    }

    await MatchesEntities.remove(match);

    return {
      message: 'Match deleted successfully',
    };
  }
}