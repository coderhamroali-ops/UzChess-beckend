import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { RequiresKey } from '../decorator/requires.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const requires = this.reflector.getAllAndOverride<string>(RequiresKey, [
      context.getHandler(),
      context.getClass(),
    ]);
    const isAdminRoute = request.path.toLowerCase().startsWith('/admin');

    if (!requires && !isAdminRoute) {
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

    const requiredRole = requires ?? 'admin';
    if (payload.role !== requiredRole) {
      throw new ForbiddenException('You do not have permission');
    }

    return true;
  }
}