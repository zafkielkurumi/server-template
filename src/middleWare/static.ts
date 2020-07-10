import express, { Handler } from 'express';

export function staticFile(root: string = 'public'): Handler {
  return express.static(root, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
}
