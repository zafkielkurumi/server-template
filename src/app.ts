import express from 'express';

import { PreMiddleWares, SufixMiddleWares } from './middleWare';
import { Result } from './models';
import { testRouter } from './routes/test';

export const app = express();

PreMiddleWares.forEach((middleWare) => {
  app.use(middleWare);
});

app.get('/', (req, res, next) => {
  res.send(Result.success('链接成功'));
});

app.use('/test', testRouter);

SufixMiddleWares.forEach((middleWare) => {
  app.use(middleWare);
});
