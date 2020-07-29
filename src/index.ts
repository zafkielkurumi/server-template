import { createServer } from 'http';
import { app } from './app';
import { startWs } from './ws';
import 'reflect-metadata';
import { createConnections } from 'typeorm';
import { getConfig } from './env';

// iconurl https://redive.estertion.win/icon/unit/100331.webp 为prefab_id + 30 6星 + 60

getConfig().then((config) => {
  createConnections(config.ormOption)
    .then((connection) => {
      const server = createServer(app);

      startWs(server);

      server.listen(config.port, () => {
        console.log('port', config.port, app.get('env'));
      });
    })
    .catch((error) => console.log('TypeORM connection error: ', error));
});
