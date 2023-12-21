import { selector } from "recoil";
import { LoginState } from "../types/loginStateType";
import { LoginStateKey, loginStateAtom } from "./loginStateAtom";

export const getLoginStateSelector = selector<LoginState>({
  key: LoginStateKey + "Selector",
  get: ({ get }) => {
    const loginState = get(loginStateAtom);
    return {
      ...loginState,
      name: loginState.name + "さん",
    } satisfies LoginState;
  },
  set: ({ set }, newValue) => {
    set(loginStateAtom, newValue);
  }
});
