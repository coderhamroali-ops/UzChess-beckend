import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayersEntities } from '../../../entities/players.entities';

@Injectable()
export class DeletePlayersHandler {
  async execute(id: number) {
    const player = await PlayersEntities.findOne({
      where: { id },
    });

    if (!player) {
      throw new NotFoundException('Player not found');
    }

    await PlayersEntities.delete(id);

    return {
      message: 'Player deleted successfully',
    };
  }
}