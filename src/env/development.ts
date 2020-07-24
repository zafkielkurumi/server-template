import { EnvConfig } from '../type';

export const Config: EnvConfig = {
  // database option
  ormOption: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'postgres',
    synchronize: true,
    logging: false,
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
  },
  // server listen port
  port: 5001,
};

export default Config;
