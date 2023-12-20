import { ClockingQueryKey } from "./clocking";
import { LoginQueryKey } from "./login";
import { UserQueryKey } from "./user";

export const QueryKey = {
  user: UserQueryKey,
  login: LoginQueryKey,
  clocking: ClockingQueryKey,
} as const;
