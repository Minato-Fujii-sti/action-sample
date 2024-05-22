import { Header } from "src/components/ui-components/header";
import { Button } from "../../../components/ui-parts";
import { useGetClockInStatus } from "../hooks/useClockIn";
import { useEffect, useState } from "react";
import {
  useEndClick,
  startClick,
  useStartClick,
  endClick,
} from "../hooks/useClick";
import { useGetLoginUser } from "../hooks/useUser";

//打刻画面
export const ClockIn = () => {
  const { startDisabled, endDisabled, refetch } = useGetClockInStatus();
  const loginUser = useGetLoginUser();

  //打刻関数
  const startRefetch = useStartClick();
  const endRefetch = useEndClick();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      const weekday = ["日", "月", "火", "水", "木", "金", "土"];
      const now = new Date();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const dayOfWeek = weekday[now.getDay()];
      setDate(`${month}月${day}日（${dayOfWeek}）`);
      const hour = now.getHours().toString().padStart(2, "0");
      const minute = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hour}:${minute}:${seconds}`);
    }, 1000);
  }, []);

  return (
    <div>
      <Header currentScreen="clockIn" />
      <div>{loginUser?.username}</div>
      <div>{date}</div>
      <div>{time}</div>
      <Button
        onClick={() => startClick(startRefetch, refetch)}
        disabled={startDisabled}
      >
        出勤
      </Button>
      <Button
        onClick={() => endClick(endRefetch, refetch)}
        disabled={endDisabled}
      >
        退勤
      </Button>
    </div>
  );
};
