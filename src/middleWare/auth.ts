import express, { Handler } from 'express';

const whiteList = [];

export const authMid = (req: Request, res, next): void => {
  next();
  // if (req.headers['token']) {
  //   next();
  // } else {
  //   // throw new Error("unauth");
  //   res.send({
  //     code: 1,
  //     msg: 'unauth',
  //   });
  // }
};
