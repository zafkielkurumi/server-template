/**
 * 玩酷Q
 */
import { Router, Request, Response, NextFunction } from 'express';
import { http } from '../utils/axios';

export const basePath = '/pcr';
export const qqRouter = Router({
  strict: true,
});

qqRouter.post('/', (req: Request, res: Response) => {
  console.log('qqbot测试成功');
  const user_id = req.body.user_id;
  http.post('/send_msg', {
    message_type: 'private',
    user_id: user_id,
    message: '我要色图',
  });
  res.end();
});
