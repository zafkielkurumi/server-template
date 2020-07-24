import WebSocket from 'ws';
import http, { IncomingMessage } from 'http';
import https from 'https';
import { Socket } from 'net';

type Server = http.Server | https.Server;

export const startWs = (server: Server): void => {
  const wss = new WebSocket.Server({
    noServer: true,
  });
  upgrade(server, wss);
  wss.on('connection', (ws: WebSocket, req: IncomingMessage) => {
    ws.send('data');
    ws.on('message', (message) => {
      console.log(req.url, 'url');
      console.log(message);
    });
    ws.on('close', (code, reason) => {
      console.log(code, 'code');
      console.log(reason, 'reason');
    });
  });

  wss.on('error', (err: Error) => {
    console.log(err);
  });

  wss.on('close', () => {
    console.log('clodse');
  });
};

function upgrade(server: Server, wss: WebSocket.Server) {
  server.on(
    'upgrade',
    (request: IncomingMessage, socket: Socket, head: Buffer) => {
      console.log('update');
      // TODO AUTH;
      wss.handleUpgrade(request, socket, head, function done(ws) {
        wss.emit('connection', ws, request);
      });
    },
  );
}
