import { atom } from "recoil";
import { LoginState } from "../types/loginStateType";

const defaultValue: LoginState = {
  name: "",
  isLogin: false,
};

export const LoginStateKey = "loginStateAtom";
export const loginStateAtom = atom<LoginState>({
  key: LoginStateKey, 
  default: defaultValue,
});
