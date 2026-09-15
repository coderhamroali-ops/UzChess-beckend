import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfigs: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgres://postgres:123@localhost:5432/uzchess-bekend',
  entities: ['dist/**/*.entities.js'],
  autoLoadEntities: true,
  synchronize: false,
};

