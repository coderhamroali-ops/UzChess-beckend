import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersEntities } from '../../users/entities/users.entities';
import { TokenPayload } from '../../../core/decorator/current-user.decorator';
import { canManageRole } from '../../../core/rbac/permissions';
import { role } from '../../../core/enum/enum';
import { AssignRoleRequest } from './assign-role.request';

@Injectable()
export class AssignRoleHandler {
  async execute(
    actor: TokenPayload,
    userId: number,
    payload: AssignRoleRequest,
  ) {
    if (userId === actor.sub) {
      throw new ForbiddenException('You cannot change your own role');
    }

    const user = await UsersEntities.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (
      !canManageRole(actor.role, user.role) ||
      !canManageRole(actor.role, payload.role)
    ) {
      throw new ForbiddenException('You cannot assign this role');
    }

    // Tizimda kamida bitta faol superAdmin qolishi shart
    if (user.role === role.SUPER_ADMIN && payload.role !== role.SUPER_ADMIN) {
      const superAdmins = await UsersEntities.count({
        where: { role: role.SUPER_ADMIN, isActive: true },
      });
      if (superAdmins <= 1) {
        throw new ForbiddenException('At least one super admin must remain');
      }
    }

    user.role = payload.role;
    await user.save();
    return { id: user.id, fullName: user.fullName, role: user.role };
  }
}
