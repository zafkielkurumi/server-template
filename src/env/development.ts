import { EnvConfig } from '../models';

export const Config: EnvConfig = {
  port: 5001,
  ormOption: [
    {
      name: 'sqlite',
      type: 'sqlite',
      database: 'D:/PremiumSoft/navicat/Premium/profiles/sqlite/pcr.db',
      synchronize: true,
      logging: false,
      entities: ['src/entity/pcr/**/*.ts'],
      migrations: ['src/migration/pcr/**/*.ts'],
      subscribers: ['src/subscriber/pcr/**/*.ts'],
    },
    {
      name: 'postgres',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      synchronize: true,
      logging: false,
      entities: ['src/entity/postgres/**/*.ts'],
      migrations: ['src/migration/postgres/**/*.ts'],
      subscribers: ['src/subscriber/postgres/**/*.ts'],
    },
  ],
};

export default Config;
