import { createServer } from 'http';
import { app } from './app';
import { Port } from './constants';
import { startWs } from './ws';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { getConfig } from './env';
// typeorm-model-generator 从现有数据库生成TypeORM模型

getConfig().then(config => {
  createConnection(config.ormOption)
  .then( (connection) => {
    const server = createServer(app);

    startWs(server);

    server.listen(config.port, () => {
      console.log('port', config.port, app.get('env'));
    });
  })
  .catch((error) => console.log('TypeORM connection error: ', error));

 });

