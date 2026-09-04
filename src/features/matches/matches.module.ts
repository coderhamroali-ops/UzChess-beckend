import { Module } from '@nestjs/common';
import { MatchesAdminController } from './matches/admin/matches-admin.controller';
import { CreateMatchesHandler } from './matches/admin/create-matches/create-matches.hendler';
import { GetAllMatchesHandler } from './matches/admin/get-all-matches/get-all-matches.handler';
import { UpdateMatchesHandler } from './matches/admin/update-matches/update-matches.handler';
import { DeleteMatchesHandler } from './matches/admin/delete-matches/delete-handler';
import { MatchesPublicController } from './matches/public/matches-public.controller';
import { GetAllMatchesHandlerPublc } from './matches/public/get-all-matches/get-all-matches.handler';

@Module({
  controllers: [
    MatchesAdminController,
    MatchesPublicController,
  ],
  providers: [
    CreateMatchesHandler,
    GetAllMatchesHandler,
    UpdateMatchesHandler,
    DeleteMatchesHandler,
    GetAllMatchesHandlerPublc,
  ]
})
export class MatchesModule {

}