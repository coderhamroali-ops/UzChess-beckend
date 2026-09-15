import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggersConfigs } from './core/configs/swaggers.configs';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import {join} from "path"

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "uploads"), {prefix: "/uploads/"})
  SwaggersConfigs(app);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(8000);
}


bootstrap();