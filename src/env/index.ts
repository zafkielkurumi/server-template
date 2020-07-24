/**
 * 多环境配置
 */

import { EnvConfig } from '../type/config';

enum Env {
    development = 'development',
    prod = 'prod'
}
export async function getConfig(): Promise<EnvConfig> {
  const env = process.env.NODE_ENV;
  console.log(env);
  const url = Env[env];
  const module = await import(`./${url}`);
  return module.Config;
}
