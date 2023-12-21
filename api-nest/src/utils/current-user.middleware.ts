import { CustomRequest, UserEntity } from "@app/app.interface";
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response } from "express";

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {

  async use(req: CustomRequest, _: Response,  next: () => void): Promise<void> {
    const apiKey = req.headers["x-api-key"] as string;
    try {
      const user: UserEntity = {
        username: "test"
      }

      req.currentUser = user;
      // _.header('Access-Control-Allow-Origin', '*');
      // _.header(
      //   'Access-Control-Allow-Headers',
      //   'Origin, X-Requested-With, Content-Type, Accept',
      // );
      next();
    } catch {
      next();
    }
  }
}