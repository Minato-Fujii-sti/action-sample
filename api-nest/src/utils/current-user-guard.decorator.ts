import { CurrentUserGuard } from "@app/current-user.guard";
import { UseGuards, applyDecorators } from "@nestjs/common";

export function GuardCurrentUser() {
  const userDecorators = [
    // ApiSecurity("X-Api-Key"),
    UseGuards(new CurrentUserGuard()),
  ];
  return applyDecorators(...userDecorators);
}