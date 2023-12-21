import { User } from '@prisma/client';

export type sessionType = {
  visits: number;
  login: User;
};
