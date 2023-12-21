import { UserResponse } from "../login/types/logintype";

export const usersNormalizer = (data: UserResponse[] | undefined) => {
  return data?.map((item) => {
    return {
      id: item.id,
      username: item.username,
      password: item.password,
      created_at: new Date(item.created_at),
      updated_at: new Date(item.updated_at),
    };
  });
};

export const userNormalizer = (item: UserResponse | undefined) => {
  if (!item) {
    return undefined;
  }
  return {
    id: item.id,
    username: item.username,
    password: item.password,
    created_at: new Date(item.created_at),
    updated_at: new Date(item.updated_at),
  };
};
