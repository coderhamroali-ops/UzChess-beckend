import { SetMetadata } from '@nestjs/common';

export const RequiresKey = 'requires';
export const Requires = (permission: string) =>
  SetMetadata(RequiresKey, permission);

// Tizimga kirgan har qanday foydalanuvchi (token yetarli, rol shart emas)
export const AuthRequiredKey = 'authRequired';
export const Auth = () => SetMetadata(AuthRequiredKey, true);