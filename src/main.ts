import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggersConfigs } from './core/configs/swaggers.configs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggersConfigs(app);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(8000);
}


bootstrap();

