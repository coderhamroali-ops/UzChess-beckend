import { Module } from '@nestjs/common';
import { PlayersPublicController } from './players/public/players-public-controller';
import { PlayersAdminController } from './players/admin/players.admin.controller';
import { CreatePlayersHandler } from './players/admin/create-players/create-players.handler';
import { GetAllPlayersHandler } from './players/admin/get-all-players/get-all-players.handler';
import { UpdatePlayersHandler } from './players/admin/update-players/update-players.handler';
import { DeletePlayersHandler } from './players/admin/delete-players/delete-players.handler';
import { GetAllPlayersHandlerPub } from './players/public/get-all-players/get-all-players.handler';

@Module({
  controllers: [
    PlayersAdminController,
    PlayersPublicController
  ],

  providers: [
    CreatePlayersHandler,
    GetAllPlayersHandler,
    UpdatePlayersHandler,
    DeletePlayersHandler,
    GetAllPlayersHandlerPub
  ]
})
export class PlayersModule {}