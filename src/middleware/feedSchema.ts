
import { Request, Response, NextFunction } from 'express';

export async function feedSchema(request: Request, response: Response, next: NextFunction) {
  const { page, take, latitude, longitude } = request.body
  if (!page || !take || !latitude || !longitude) {
    return response.status(500).send({ message: 'Eksik bilgiler var' })
  }

  next();
}