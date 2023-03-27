import { DataSource } from 'typeorm';

export const newsletterDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 3306,
  username: 'baupal',
  password: 'BaupalPassword!',
  database: 'baupal',
  entities: ['src/database/entity/**/*.ts'],
  logging: true,
  synchronize: true,
});
