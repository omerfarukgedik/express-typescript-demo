import { Request, Response, NextFunction } from "express";

export class IndexController {

  async index(request: Request, response: Response, next: NextFunction) {
    try {
      response.status(200).json({ message: 'working!' })
    } catch (err) {
      response.status(500).json({ message: `Sunucu hatası. Lütfen tekrar deneyin. ${err}` })
    }
  }
}
