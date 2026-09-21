import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ILike } from 'typeorm';

import { UsersEntities } from '../../users/entities/users.entities';
import { role } from '../../../core/enum/enum';
import { RegisterRequest } from './register.request';

@Injectable()
export class RegisterHandler {
  constructor(private readonly jwtService: JwtService) {}

  async execute(payload: RegisterRequest) {
    // ILike da % va _ maxsus belgi, ularni oddiy belgiga aylantiramiz
    const escapedLogin = payload.login.replace(/[%_\\]/g, '\\$&');

    const loginExists = await UsersEntities.exists({
      where: { login: ILike(escapedLogin) },
    });
    if (loginExists) {
      throw new ConflictException('Login already exists');
    }

    const user = UsersEntities.create({
      role: role.USER, // rol doim 'user', mijozdan olinmaydi
      fullName: payload.fullName,
      login: payload.login,
      loginType: payload.loginType,
      password: await bcrypt.hash(payload.password, 10),
      birthDate: payload.birthDate ? new Date(payload.birthDate) : undefined,
      isVerified: false,
      isActive: true,
    });
    await user.save();

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      role: user.role,
    });

    return {
      accessToken,
      user: { id: user.id, fullName: user.fullName, role: user.role },
    };
  }
}