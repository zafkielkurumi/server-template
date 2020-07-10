import express, { Request, Response } from 'express';
import { MiddleWares } from './middleWare';

export const app = express();

MiddleWares.forEach((middleWare) => {
  app.use(middleWare);
});
