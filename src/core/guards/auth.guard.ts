import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import {
  AuthRequiredKey,
  PermissionsKey,
  RequiresKey,
  RolesKey,
} from '../decorator/requires.decorator';
import { role } from '../enum/enum';
import {
  actionFromMethod,
  hasPermission,
  ROLE_LEVEL,
  resourceFromPath,
} from '../rbac/permissions';
import { UsersEntities } from '../../features/users/entities/users.entities';

/**
 * Global guard: autentifikatsiya + RBAC.
 *
 * 1. `/admin/*` yo'llari doim token va ruxsat talab qiladi
 *    (`<resurs>:read` yoki `<resurs>:write`, metodga qarab).
 * 2. `@Permissions(...)`, `@Roles(...)`, `@Requires(...)` — aniq talablar.
 * 3. `@Auth()` — faqat tizimga kirgan bo'lish yetarli.
 * 4. Qolgan yo'llar ochiq.
 *
 * Token ichidagi rolga ishonmaymiz: foydalanuvchi har so'rovda bazadan olinadi,
 * shuning uchun bloklangan yoki roli o'zgargan foydalanuvchi darhol cheklanadi.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const targets = [context.getHandler(), context.getClass()];

    const explicitPermissions =
      this.reflector.getAllAndOverride<string[]>(PermissionsKey, targets) ?? [];
    const allowedRoles =
      this.reflector.getAllAndOverride<role[]>(RolesKey, targets) ?? [];
    const requires = this.reflector.getAllAndOverride<string>(
      RequiresKey,
      targets,
    );
    const authRequired = this.reflector.getAllAndOverride<boolean>(
      AuthRequiredKey,
      targets,
    );

    const resource = resourceFromPath(request.path ?? request.url ?? '');
    const permissions = [...explicitPermissions];
    if (resource && permissions.length === 0) {
      permissions.push(`${resource}:${actionFromMethod(request.method)}`);
    }

    const needsAuth =
      authRequired ||
      !!requires ||
      allowedRoles.length > 0 ||
      permissions.length > 0;
    if (!needsAuth) {
      return true;
    }

    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException('Token is missing');
    }

    let payload: { sub: number; role: string };
    try {
      payload = await this.jwtService.verifyAsync(token);
    } catch {
      throw new UnauthorizedException('Token is invalid or expired');
    }

    const user = await UsersEntities.findOne({
      where: { id: payload.sub },
      select: { id: true, role: true, isActive: true },
    });
    if (!user || !user.isActive) {
      throw new UnauthorizedException('User not found or inactive');
    }

    // Har doim bazadagi joriy rol ishlatiladi
    request.user = { sub: user.id, role: user.role };

    if (allowedRoles.length && !allowedRoles.includes(user.role)) {
      throw new ForbiddenException('You do not have permission');
    }

    if (requires) {
      const isRoleName = Object.values(role).includes(requires as role);
      const ok = isRoleName
        ? ROLE_LEVEL[user.role] >= ROLE_LEVEL[requires as role]
        : hasPermission(user.role, requires);
      if (!ok) throw new ForbiddenException('You do not have permission');
    }

    const missing = permissions.filter((p) => !hasPermission(user.role, p));
    if (missing.length) {
      throw new ForbiddenException(
        `You do not have permission: ${missing.join(', ')}`,
      );
    }

    return true;
  }
}
