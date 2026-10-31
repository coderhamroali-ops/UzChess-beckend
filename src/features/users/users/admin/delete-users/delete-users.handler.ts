import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { UsersEntities } from '../../../entities/users.entities';
import { TokenPayload } from '../../../../../core/decorator/current-user.decorator';
import { canManageRole } from '../../../../../core/rbac/permissions';

export class DeleteUsersHandler {
  async execute(actor: TokenPayload, id: number) {
    const user = await UsersEntities.findOneBy({
      id,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.id === actor.sub) {
      throw new ForbiddenException('You cannot delete yourself');
    }

    if (!canManageRole(actor.role, user.role)) {
      throw new ForbiddenException('You cannot delete users with this role');
    }

    return await UsersEntities.remove(user);
  }
}
