import { useRecoilValue } from "recoil";
import { loginStateAtom } from "src/feature/recoilsample/recoil/loginStateAtom";

export const TestB = () => {
  const loginState = useRecoilValue(loginStateAtom);
  return (
    <div>
      <h1>TestB</h1>
      {loginState.name}さん、こんにちは
      <br />
      {loginState.isLogin ? "ログイン中です。" : "ログインしていません。"}
    </div>
  );
};
export default TestB;
