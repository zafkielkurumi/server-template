import express from 'express';
import fs from 'fs';

import { PreMiddleWares, SufixMiddleWares } from './middleWare';
import { Result } from './models';
import { testRouter, userRouter, qqRouter, pcrRouter } from './routes';

import brotli from 'brotli';

export const app = express();

const rootRouter = express.Router({ strict: true });

PreMiddleWares.forEach((middleWare) => {
  app.use(middleWare);
});
3;
app.get('/', (req, res, next) => {
  res.send(Result.success('链接成功'));
});
app.use('/meqq', qqRouter);
rootRouter.use('/test', testRouter);
rootRouter.use('/user', userRouter);
rootRouter.use('/pcr', pcrRouter);
app.use('/api', rootRouter);

SufixMiddleWares.forEach((middleWare) => {
  app.use(middleWare);
});

const dbBuffer = brotli.decompress(
  fs.readFileSync('./src/assets/redive_jp.db.br'),
);

fs.writeFileSync('./txt.db', dbBuffer);
