import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export class TokenPayload {
  sub: number;
  role: string;
}

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): TokenPayload => {
    return context.switchToHttp().getRequest().user;
  },
);