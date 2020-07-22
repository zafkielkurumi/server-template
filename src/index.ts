import { createServer } from 'http';
import { app } from './app';
import { Port } from './constants';
import { startWs } from './ws';

const server = createServer(app);

startWs(server);

server.listen(Port, () => {
  console.log('port', Port, app.get('env'));
});
