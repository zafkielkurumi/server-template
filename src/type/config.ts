import { ConnectionOptions } from 'typeorm';

export interface EnvConfig {
  ormOption: ConnectionOptions;
  port: number;
}
