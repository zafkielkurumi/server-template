import { Router, Request, Response, NextFunction } from 'express';
import { Result } from '../models';

export const testRouter = Router({
  strict: true,
});

testRouter.get('/', (req: Request, res: Response) => {
  res.send(Result.success<string>('测试成功'));
});
