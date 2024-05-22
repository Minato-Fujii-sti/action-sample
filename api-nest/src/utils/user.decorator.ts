
import { UserEntity } from '@app/app.interface';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserDecorator = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserEntity => {
    const request = ctx.switchToHttp().getRequest();
    return request.currentUser;
  },
);