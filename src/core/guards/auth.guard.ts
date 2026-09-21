import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthRequiredKey, RequiresKey } from '../decorator/requires.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const targets = [context.getHandler(), context.getClass()];

    const requires = this.reflector.getAllAndOverride<string>(
      RequiresKey,
      targets,
    );
    const authRequired = this.reflector.getAllAndOverride<boolean>(
      AuthRequiredKey,
      targets,
    );
    const isAdminRoute = request.path.toLowerCase().startsWith('/admin');

    if (!requires && !authRequired && !isAdminRoute) {
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

    request.user = payload;

    const requiredRole = requires ?? (isAdminRoute ? 'admin' : undefined);
    if (requiredRole && payload.role !== requiredRole) {
      throw new ForbiddenException('You do not have permission');
    }

    return true;
  }
}