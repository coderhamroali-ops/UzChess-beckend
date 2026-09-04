import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ILike, Not } from 'typeorm';

import { UpdateUsersRequest } from './update-users.request';
import { UsersEntities } from '../../../entities/users.entities';

@Injectable()
export class UpdateUsersHandler {

  async execute(
    id: number,
    payload: UpdateUsersRequest,
  ) {
    const user = await UsersEntities.findOneBy({
      id: id,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const loginExists = await UsersEntities.exists({
      where: {
        id: Not(user.id),
        login: ILike(payload.login),
      },
    });

    if (loginExists) {
      throw new ConflictException('Login already exists');
    }

    user.role = payload.role;
    user.fullName = payload.fullName;
    user.profileImage = payload.profileImage;
    user.login = payload.login;
    user.loginType = payload.loginType;
    user.password = payload.password;
    user.birthDate = payload.birthDate;
    user.isVerified = payload.isVerified;
    user.isActive = payload.isActive;

    return await UsersEntities.save(user);
  }
}