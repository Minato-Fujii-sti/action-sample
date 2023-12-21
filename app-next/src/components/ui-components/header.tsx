import { apiClient } from "src/lib/axios";
import { Button, Grid, TextField } from "../../components/ui-parts";
import Router from "next/router";

const logout = async () => {
  // TODO ログアウト処理をもっとちゃんと書く
  await apiClient.post("/users/logout");
  Router.push("/login");
};

const transitionClockIn = () => {
  Router.push("/clock-in");
};

const transitionCalender = () => {
  Router.push("/calender");
};

const ClockIn = "clockIn";
const Calender = "calender";
type Props = {
  currentScreen: "clockIn" | "calender";
};
export const Header = (props: Props) => {
  return (
    <div>
      <Button
        onClick={transitionClockIn}
        disabled={props.currentScreen === ClockIn}
      >
        打刻
      </Button>
      <Button
        onClick={transitionCalender}
        disabled={props.currentScreen === Calender}
      >
        日時勤怠
      </Button>
      {/* メニューに入れる */}
      <Button onClick={logout}>ログアウト</Button>
    </div>
  );
};
