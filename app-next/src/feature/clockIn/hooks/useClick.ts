import { apiClient } from "src/lib/axios";
import { PostClockInRequest } from "../types/clockInType";
import { Dispatch, SetStateAction } from "react";
import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { QueryKey } from "src/const";
import { AxiosResponse } from "axios";

const fetchPostClocking = async (body: PostClockInRequest) => {
  return await apiClient.post("/clocking", body);
};

export const useStartClick = () => {
  //  出勤
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const body: PostClockInRequest = {
    type: "start",
    day: today.toISOString(),
    time: now.toISOString(),
  };
  const useResult = useQuery(
    [QueryKey.clocking.clocking_post],
    () => fetchPostClocking(body),
    {
      cacheTime: 3000,
      enabled: false,
    }
  );
  return useResult.refetch;
};

export const startClick = async (
  startRefetch: () => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>,
  refetch: () => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>,
) => {
  await startRefetch();
  await refetch();
};

export const useEndClick = () => {
  // 退勤
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const body: PostClockInRequest = {
    type: "end",
    day: today.toISOString(),
    time: now.toISOString(),
  };
  const useResult = useQuery(
    [QueryKey.clocking.clocking_post],
    () => fetchPostClocking(body),
    {
      cacheTime: 3000,
      enabled: false,
    }
  );
  return useResult.refetch;
};

export const endClick = async (
  endRefetch: () => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>,
  refetch: () => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>,
) => {
  await endRefetch();
  await refetch();
};
