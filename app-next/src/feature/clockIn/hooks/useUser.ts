import { apiClient } from "src/lib/axios";
import { QueryKey } from "src/const";
import { useQuery } from "@tanstack/react-query";
import { userNormalizer } from "src/feature/normalizer/userNormalizer";

const fetchLoginUser = async () => {
  return await apiClient.get('/users/login');
};

export const useGetLoginUser = () => {
  const useResult = useQuery(
    [QueryKey.login.login_get],
    () => fetchLoginUser(),
  );
  console.log('useResult', useResult);
  const normalizedData = userNormalizer(useResult.data?.data)
  return normalizedData;
};
