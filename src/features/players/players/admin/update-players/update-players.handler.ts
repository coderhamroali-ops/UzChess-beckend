import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePlayersRequest } from './update-players.request';
import { PlayersEntities } from '../../../entities/players.entities';

@Injectable()
export class UpdatePlayersHandler {
  async execute(id: number, payload: UpdatePlayersRequest) {
    const player = await PlayersEntities.findOne({
      where: { id },
    });

    if (!player) {
      throw new NotFoundException('Player not found');
    }

    player.countryId = payload.countryId;
    player.fulName = payload.fulName;
    player.image = payload.image;
    player.classic = payload.classic;
    player.rapid = payload.rapid;
    player.blitz = payload.blitz;

    return await player.save();
  }
}