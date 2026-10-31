import { SetMetadata } from '@nestjs/common';
import { role } from '../enum/enum';
import { Permission } from '../rbac/permissions';

/** Endpoint uchun kerakli ruxsatlar (hammasi bo'lishi shart) */
export const PermissionsKey = 'permissions';
export const Permissions = (...permissions: Permission[]) =>
  SetMetadata(PermissionsKey, permissions);

/** Endpointga faqat ko'rsatilgan rollar kira oladi */
export const RolesKey = 'roles';
export const Roles = (...roles: role[]) => SetMetadata(RolesKey, roles);

/** Tizimga kirgan har qanday foydalanuvchi (token yetarli, rol shart emas) */
export const AuthRequiredKey = 'authRequired';
export const Auth = () => SetMetadata(AuthRequiredKey, true);

/**
 * Eski kod bilan moslik uchun: `@Requires('admin')` — shu rol va undan kuchliroq
 * rollar; `@Requires('books:write')` — shu ruxsat.
 */
export const RequiresKey = 'requires';
export const Requires = (permissionOrRole: string) =>
  SetMetadata(RequiresKey, permissionOrRole);
