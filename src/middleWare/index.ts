// import compression from "compression";  // compresses requests
// import session from "express-session";
import express from 'express';

import { errorMid } from './error';
import { staticFile } from './static';
import { authMid } from './auth';

export const PreMiddleWares = [staticFile(), authMid, express.json()];

export const SufixMiddleWares = [errorMid];
