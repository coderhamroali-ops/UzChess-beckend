import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePlayersRequest } from './create-players.request';
import { ILike } from 'typeorm';
import { PlayersEntities } from '../../../entities/players.entities';

@Injectable()
export class CreatePlayersHandler {
  async execute(payload: CreatePlayersRequest) {
    const playerExists = await PlayersEntities.existsBy({
      fulName: ILike(payload.fulName),
    });

    if (playerExists) {
      throw new ConflictException('Player already exists');
    }

    const player = PlayersEntities.create({
      countryId: payload.countryId,
      fulName: payload.fulName,
      image: payload.image,
      classic: payload.classic,
      rapid: payload.rapid,
      blitz: payload.blitz,
    });

    return await player.save();
  }
}