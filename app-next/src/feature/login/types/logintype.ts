export type UserResponse = {
  id: number;
  username: string;
  password: string;
  created_at: string;
  updated_at: string;
};
export type UserDto = {
  id: number;
  username: string;
  password: string;
  created_at: Date;
  updated_at: Date;
};
export type PostLoginRequest = {
  user_id: string;
  password: string;
};
