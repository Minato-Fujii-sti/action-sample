import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  public prisma = new PrismaClient();

  async onModuleInit() {
    await this.prisma.$connect();
  }

  getHello(): string {
    return 'Hello World!';
  }

  async enableShutdownHooks(app: INestApplication) {
    this.prisma.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
