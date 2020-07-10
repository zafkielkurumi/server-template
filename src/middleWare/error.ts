import { Request, Response } from 'express';
import { Status } from '../constants';

export function errorMid(err: Error, req: Request, res: Response) {
  res.status(Status.error).send();
}
