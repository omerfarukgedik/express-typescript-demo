
import { Request, Response, NextFunction } from 'express';

export async function apiKey(request: Request, response: Response, next: NextFunction) {
  const key = "123"
  const apikey = request.headers['apikey']
  if (!apikey || apikey != key) {
    return response.status(500).send({ message: 'Apikey bulunamadı' })
  }

  next();
}