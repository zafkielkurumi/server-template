import { ConnectionOptions } from 'typeorm';

export interface EnvConfig {
  /**
   *  database option
   */
  ormOption: ConnectionOptions[];
  /**
   * server port
   */
  port: number;
}
