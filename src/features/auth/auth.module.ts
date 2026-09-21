import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LoginHandler } from './login/login.handler';
import { RegisterHandler } from './register/register.handler';
import { MeHandler } from './me/me.handler';
import { AdminSeedService } from './seed/admin-seed.service';
import { AuthGuard } from '../../core/guards/auth.guard';

@Global()
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    LoginHandler,
    RegisterHandler,
    MeHandler,
    AdminSeedService,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AuthModule {}