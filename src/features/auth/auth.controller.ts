import { Body, Controller, Post } from '@nestjs/common';
import { LoginHandler } from './login/login.handler';
import { LoginRequest } from './login/login.request';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginHandler: LoginHandler) {}

  @Post('login')
  async login(@Body() payload: LoginRequest) {
    return await this.loginHandler.execute(payload);
  }
}