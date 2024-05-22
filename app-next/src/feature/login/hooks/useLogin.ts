import { apiClient } from "src/lib/axios";
import { PostLoginRequest } from "../types/logintype";
import Router from "next/router";
import { Dispatch, SetStateAction } from "react";

export const loginClick = async (
  idValue: string,
  passValue: string,
  missCount: number,
  setErrorMessage: Dispatch<SetStateAction<string>>,
  setMissCount: Dispatch<SetStateAction<number>>
) => {
  // 3回ミスったらNG
  if (missCount >= 3) {
    setErrorMessage("3回失敗済みです");
    return;
  }
  //認証
  //TODO 関数化?
  let ok = false;
  try {
    const login = await postLogin({
      user_id: idValue,
      password: passValue,
    });
    if (login.id) {
      ok = true;
    }
  } catch (e) {
    console.log(e);
    ok = false;
  }
  if (ok) {
    Router.push("/clock-in");
  } else {
    setMissCount(missCount + 1);
    setErrorMessage("ログインID・パスワードが違います");
  }
};

const postLogin = async (body: PostLoginRequest) => {
  const result = await apiClient.post("/users/login", body);
  return result.data;
};
