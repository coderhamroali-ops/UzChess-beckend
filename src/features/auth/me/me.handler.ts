import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersEntities } from '../../users/entities/users.entities';

@Injectable()
export class MeHandler {
  async execute(userId: number) {
    const user = await UsersEntities.findOne({
      where: { id: userId },
      select: {
        id: true,
        role: true,
        fullName: true,
        profileImage: true,
        login: true,
        loginType: true,
        birthDate: true,
        isVerified: true,
        isActive: true,
      },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException('User not found or inactive');
    }

    return user;
  }
}