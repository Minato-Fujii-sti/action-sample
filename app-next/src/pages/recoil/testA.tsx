import Link from "next/link";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loginStateAtom } from "src/feature/recoilsample/recoil/loginStateAtom";
import { getLoginStateSelector } from "src/feature/recoilsample/recoil/loginStateSelector";

export const TestA = () => {
  //両方の場合
  const [login, setLogin] = useRecoilState(loginStateAtom);

  //取得だけの場合はuseRecoilValueを使う
  const loginState = useRecoilValue(loginStateAtom);
  const loginState2 = useRecoilValue(getLoginStateSelector);
  console.log("loginState");
  console.log(loginState);

  //更新だけの場合はuseSetRecoilStateを使う
  const setLoginState = useSetRecoilState(loginStateAtom);
  const setLoginState2 = useSetRecoilState(getLoginStateSelector);
  return (
    <div>
      <div>TestA</div>
      {loginState.name}さん、こんにちは
      <br />
      {loginState2.name}さん、こんにちは
      <br />
      {loginState.isLogin ? "ログイン中です。" : "ログインしていません。"}
      <br />
      {loginState2.isLogin ? "ログイン中です。" : "ログインしていません。"}
      <br />
      <button
        onClick={() => {
          setLoginState({ ...loginState, name: "fujii" });
        }}
      >
        名前変更
      </button>
      <br />
      <button
        onClick={() => {
          setLoginState2({ ...loginState, name: "(selector)fujii" });
        }}
      >
        selectorで名前変更
      </button>
      <Link href="/recoil/testB">TestB</Link>
    </div>
  );
};
export default TestA;
