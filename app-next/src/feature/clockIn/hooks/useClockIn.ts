import { apiClient } from "src/lib/axios";
import { QueryKey } from "src/const";
import { useQuery } from "@tanstack/react-query";

const fetchGetClocking = async (today: Date) => {
  return await apiClient.get(`/clocking/${today.toISOString()}`);
};

export const useGetClockInStatus = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const useResult = useQuery(
    [QueryKey.clocking.clocking_get],
    () => fetchGetClocking(today),
    {
      cacheTime: 3000,
    }
  );
  //TODO ローディング中の考慮
  if (!useResult.data?.data) {
    //その日のデータが未登録なら出勤前
    return {
      startDisabled: false,
      endDisabled: true,
      refetch: useResult.refetch,
    };
  } else if (!useResult.data.data.end_time) {
    //その日のデータが登録済みかつ退勤時間が未登録なら出勤中
    return {
      startDisabled: true,
      endDisabled: false,
      refetch: useResult.refetch,
    };
  } else {
    //その日のデータが登録済みかつ退勤時間が登録済みなら退勤済み
    return {
      startDisabled: true,
      endDisabled: true,
      refetch: useResult.refetch,
    };
  }
};
