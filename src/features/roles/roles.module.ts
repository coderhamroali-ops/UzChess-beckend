import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { AssignRoleHandler } from './assign-role/assign-role.handler';

@Module({
  controllers: [RolesController],
  providers: [AssignRoleHandler],
})
export class RolesModule {}
