import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersEntities } from '../../users/entities/users.entities';
import { LoginRequest } from './login.request';

@Injectable()
export class LoginHandler {
  constructor(private readonly jwtService: JwtService) {}

  async execute(payload: LoginRequest) {
    const user = await UsersEntities.findOneBy({ login: payload.login });

    if (!user || !user.password || !user.isActive) {
      throw new UnauthorizedException('Login or password is incorrect');
    }

    const isMatch = await bcrypt.compare(payload.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Login or password is incorrect');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      role: user.role,
    });

    return {
      accessToken,
      user: {
        id: user.id,
        fullName: user.fullName,
        role: user.role,
      },
    };
  }
}