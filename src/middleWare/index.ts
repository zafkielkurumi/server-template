import { errorMid } from './error';
import { staticFile } from './static';

export const MiddleWares = [errorMid, staticFile()];
