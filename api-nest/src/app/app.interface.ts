export type UserEntity = {
  username: string;
}

export type CustomRequest = Request & { currentUser: UserEntity };