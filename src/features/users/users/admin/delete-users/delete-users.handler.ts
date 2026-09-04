import { NotFoundException } from '@nestjs/common';
import { UsersEntities } from '../../../entities/users.entities';

export class DeleteUsersHandler {

  async execute(id: number) {

    const user = await UsersEntities.findOneBy({
      id,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return await UsersEntities.remove(user);
  }
}