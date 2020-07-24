import { Router, Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { Result } from '../models';

export const userRouter = Router({
  strict: true,
});

/**
 * 登录
 */
userRouter.post('/login', (req: Request, res: Response) => {
  const params = req.params;
  res.send(Result.success<string>('登录成功'));
});
