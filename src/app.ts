import express from 'express';

import { PreMiddleWares, SufixMiddleWares } from './middleWare';
import { Result } from './models';
import { testRouter } from './routes/test';

export const app = express();

const rootRouter = express.Router({ strict: true });

PreMiddleWares.forEach((middleWare) => {
  app.use(middleWare);
});

app.get('/', (req, res, next) => {
  res.send(Result.success('链接成功'));
});

rootRouter.use('/test', testRouter);
app.use('/api', rootRouter);

SufixMiddleWares.forEach((middleWare) => {
  app.use(middleWare);
});
