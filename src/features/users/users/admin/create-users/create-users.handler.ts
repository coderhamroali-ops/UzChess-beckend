import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { UsersEntities } from '../../../entities/users.entities';
import { CreateUsersRequest } from './create-user.request';

@Injectable()
export class CreateUsersHandler {

  constructor(
    @InjectRepository(UsersEntities)
    private readonly usersRepository: Repository<UsersEntities>,
  ) {
  }

  async execute(payload: CreateUsersRequest) {

    const loginExists = await this.usersRepository.existsBy({
      login: ILike(payload.login),
    });

    if (loginExists) {
      throw new ConflictException('Login already exists');
    }

    const newUser = this.usersRepository.create({
      role: payload.role,
      fullName: payload.fullName,
      profileImage: payload.profileImage,
      login: payload.login,
      loginType: payload.loginType,
      password: payload.password
        ? await bcrypt.hash(payload.password, 10)
        : undefined,
      birthDate: payload.birthDate,
      isVerified: payload.isVerified ?? false,
      isActive: payload.isActive ?? false,
    });

    const saved = await this.usersRepository.save(newUser);
    const { password, ...result } = saved;
    return result;
  }
}