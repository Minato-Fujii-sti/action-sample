import { Module } from '@nestjs/common';
import { MyuserService } from './myuser.service';
import { MyuserResolver } from './myuser.resolver';

@Module({
  providers: [MyuserResolver, MyuserService]
})
export class MyuserModule {}
