import { Body, Controller, Get, Post } from '@nestjs/common';
import { Auth } from '../../core/decorator/requires.decorator';
import {
  CurrentUser,
  TokenPayload,
} from '../../core/decorator/current-user.decorator';
import { LoginHandler } from './login/login.handler';
import { LoginRequest } from './login/login.request';
import { RegisterHandler } from './register/register.handler';
import { RegisterRequest } from './register/register.request';
import { MeHandler } from './me/me.handler';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginHandler: LoginHandler,
    private readonly registerHandler: RegisterHandler,
    private readonly meHandler: MeHandler,
  ) {}

  @Post('login')
  async login(@Body() payload: LoginRequest) {
    return await this.loginHandler.execute(payload);
  }

  @Post('register')
  async register(@Body() payload: RegisterRequest) {
    return await this.registerHandler.execute(payload);
  }

  @Auth()
  @Get('me')
  async me(@CurrentUser() user: TokenPayload) {
    return await this.meHandler.execute(user.sub);
  }
}