import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfigs: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['dist/**/*.entities.js'],
  autoLoadEntities: true,
  synchronize: false,
};