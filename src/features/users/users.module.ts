import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersAdminController } from './users/admin/users-admin-controller';
import { UsersEntities } from './entities/users.entities';
import { UsersPublicController } from './users/public/users-public-controller';
import { CreateUsersHandler } from './users/admin/create-users/create-users.handler';
import { GetAllUsersHandler } from './users/admin/get-all-user/get-all-users.handler';
import { UpdateUsersHandler } from './users/admin/update-users/update-users-handler';
import { DeleteUsersHandler } from './users/admin/delete-users/delete-users.handler';
import { GetAllUsersHandlerPub } from './users/public/get-all-user/get-all-users.handler';



@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersEntities,
    ]),
  ],

  controllers: [
    UsersAdminController,
    UsersPublicController,
  ],

  providers: [
    CreateUsersHandler,
    GetAllUsersHandler,
    UpdateUsersHandler,
    DeleteUsersHandler,
    GetAllUsersHandlerPub
  ],

})
export class UsersModule {}