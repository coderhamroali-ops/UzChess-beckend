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
      this.logger.warn(
        'ADMIN_LOGIN / ADMIN_PASSWORD not set, admin not created',
      );
      return;
    }

    const superAdminExists = await UsersEntities.exists({
      where: { role: role.SUPER_ADMIN },
    });
    if (superAdminExists) {
      return;
    }

    // Avvalgi versiyada yaratilgan admin bo'lsa — uni superAdmin qilamiz
    const existing = await UsersEntities.findOneBy({ login });
    if (existing) {
      existing.role = role.SUPER_ADMIN;
      existing.isActive = true;
      await existing.save();
      this.logger.log(`Promoted ${login} to superAdmin`);
      return;
    }

    const admin = UsersEntities.create({
      role: role.SUPER_ADMIN,
      fullName: 'Admin',
      login,
      loginType: loginType.EMAIL,
      password: await bcrypt.hash(password, 10),
      isVerified: true,
      isActive: true,
    });
    await admin.save();

    this.logger.log(`First super admin created: ${login}`);
  }
}
