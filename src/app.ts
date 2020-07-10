import express, { Request, Response } from 'express';
import { MiddleWares } from 'src/middleWare';

export const app = express();

MiddleWares.forEach((middleWare) => {
  app.use(middleWare);
});
