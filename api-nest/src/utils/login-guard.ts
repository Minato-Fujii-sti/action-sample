import { CanActivate, ExecutionContext } from '@nestjs/common';

export class LoginGuard implements CanActivate {
  constructor() {
    return;
  }
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const session = request.session;
    return session.login ? true : false;
  }
}
