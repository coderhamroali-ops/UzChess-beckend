import { Injectable } from '@nestjs/common';
import { PlayersEntities } from '../../../entities/players.entities';
import { GetAllPlayersRequest } from './get-all-players.request';

@Injectable()
export class GetAllPlayersHandlerPub {
  async execute(filters: GetAllPlayersRequest) {
    return await PlayersEntities.find({
      select: {
        id: true,
        countryId: true,
        fulName: true,
        image: true,
        classic: true,
        rapid: true,
        blitz: true,
      },
    });
  }
}