import { CustomRequest } from '@app/app.interface';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: CustomRequest, res: Response, next: NextFunction) {
    console.log('Request...');
    req.currentUser = {
      username: 'test',
    };
    next();
  }
}

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request...`);
  next();
};