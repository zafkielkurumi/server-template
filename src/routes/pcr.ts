import { Router, Request, Response, NextFunction } from 'express';
import { Result } from '../models';
import { getCharaList } from '../logic/pcr';

export const pcrRouter = Router({
  strict: true,
});

pcrRouter.get('/charaList', async (req: Request, res: Response) => {
  const charaList = await getCharaList();
  res.send(Result.success(charaList));
});

pcrRouter.get('/gvgTask', async (req: Request, res: Response) => {
  const charaList = await getCharaList();
  res.send(Result.success(charaList));
});
