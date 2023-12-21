import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { logger } from './utils/logger.middleware';
import session from 'express-session';
import { CurrentUserMiddleware } from '@utils/current-user.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(logger);
  app.enableCors({
    origin: 'http://localhost:3333',
    credentials: true,
  });
  // app.use(CurrentUserMiddleware);
  app.use(
    session({
      secret: 'secret-key',
      resave: false,
      saveUninitialized: false,
    }),
  );
  await app.listen(3444);
}
bootstrap();
