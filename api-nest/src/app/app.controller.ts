import { Controller, Get, HttpException, HttpStatus, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUserGuard } from './current-user.guard';

@Controller()
// @UseGuards(new CurrentUserGuard())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  test(): string {
    return 'てすと';
  }

  @Get('test/number')
  hogehoge():any{
    const data = {
      num: 12,
      bool:false,
      str:"hogehoge",
      obj:{a:1,b:2,c:3},
    }
    return JSON.stringify(data);
  }

}
