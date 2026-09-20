import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function SwaggersConfigs(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('UsChess Backend APIs')
    .setVersion('v1.0.0')
    .addBearerAuth()
    .build();

  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, doc);
}

