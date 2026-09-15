import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://postgres:123@localhost:5432/dars603',
  entities: ['dist/**/*.entities.js'],
  migrations: ["dist/migrations/*.js"],
  synchronize: false,
});