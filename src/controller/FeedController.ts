import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { Feed } from "../entity/Feed";

export class FeedController {
  private repo = getRepository(Feed);

  async getFeed(request: Request, response: Response, next: NextFunction) {
    try {
      const page = parseInt(request.body.page as any) || 1;
      const take = parseInt(request.body.take) || 10;
      const latitude = parseInt(request.body.latitude) || 10;
      const longitude = parseInt(request.body.longitude) || 10;

      const total = await this.repo.count()
      const feeds = await this.repo.find({ take, skip: (page - 1) * take })

      response.status(200).json({ total, lastPage: Math.ceil(total / take), currentPage: page, latitude, longitude, data: feeds })
    } catch (err) {
      response.status(500).json({ message: `Sunucu hatası. Lütfen tekrar deneyin. ${err}` })
    }
  }
}
