import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersEntities } from '../../users/entities/users.entities';
import { loginType, role } from '../../../core/enum/enum';

@Injectable()
export class AdminSeedService implements OnApplicationBootstrap {
  private readonly logger = new Logger(AdminSeedService.name);

  async onApplicationBootstrap() {
    const login = process.env.ADMIN_LOGIN;
    const password = process.env.ADMIN_PASSWORD;

    if (!login || !password) {
      this.logger.warn('ADMIN_LOGIN / ADMIN_PASSWORD not set, admin not created');
      return;
    }

    const adminExists = await UsersEntities.exists({
      where: { role: role.ADMIN },
    });
    if (adminExists) {
      return;
    }

    const admin = UsersEntities.create({
      role: role.ADMIN,
      fullName: 'Admin',
      login,
      loginType: loginType.EMAIL,
      password: await bcrypt.hash(password, 10),
      isVerified: true,
      isActive: true,
    });
    await admin.save();

    this.logger.log(`First admin created: ${login}`);
  }
}