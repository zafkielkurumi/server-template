import { Request, Response, NextFunction } from 'express';
import { Status } from '../constants';

export const errorMid = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.status(Status.error).send(err.message);
};
