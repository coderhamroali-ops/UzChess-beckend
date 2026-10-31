import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Permissions } from '../../core/decorator/requires.decorator';
import {
  CurrentUser,
  TokenPayload,
} from '../../core/decorator/current-user.decorator';
import { role } from '../../core/enum/enum';
import {
  ALL_RESOURCES,
  ROLE_LEVEL,
  ROLE_PERMISSIONS,
} from '../../core/rbac/permissions';
import { AssignRoleHandler } from './assign-role/assign-role.handler';
import { AssignRoleRequest } from './assign-role/assign-role.request';

@ApiTags('admin / roles (RBAC)')
@ApiBearerAuth()
@Controller('admin/roles')
export class RolesController {
  constructor(private readonly assignRoleHandler: AssignRoleHandler) {}

  /** Rollar va ularning ruxsatlari jadvali */
  @Permissions('roles:read')
  @Get('list')
  list() {
    return {
      resources: ALL_RESOURCES,
      roles: Object.values(role)
        .sort((a, b) => ROLE_LEVEL[a] - ROLE_LEVEL[b])
        .map((r) => ({
          role: r,
          level: ROLE_LEVEL[r],
          permissions: r === role.SUPER_ADMIN ? ['*'] : ROLE_PERMISSIONS[r],
        })),
    };
  }

  /** Foydalanuvchiga rol tayinlash (faqat superAdmin) */
  @Permissions('roles:write')
  @Patch('assign/:userId')
  assign(
    @CurrentUser() actor: TokenPayload,
    @Param('userId', ParseIntPipe) userId: number,
    @Body() payload: AssignRoleRequest,
  ) {
    return this.assignRoleHandler.execute(actor, userId, payload);
  }
}
