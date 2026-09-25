import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersEntities } from '../../users/entities/users.entities';
import { LoginRequest } from './login.request';

@Injectable()
export class LoginHandler {
  constructor(private readonly jwtService: JwtService) {}

  async execute(payload: LoginRequest) {
    console.log('LOGIN PAYLOAD:', payload);

    const user = await UsersEntities.findOneBy({
      login: payload.login,
    });

    console.log('FOUND USER:', user);

    if (!user || !user.password || !user.isActive) {
      console.log('USER CHECK FAILED');
      throw new UnauthorizedException('Login or password is incorrect');
    }

    const isMatch = await bcrypt.compare(
      payload.password,
      user.password,
    );

    console.log('PASSWORD MATCH:', isMatch);

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