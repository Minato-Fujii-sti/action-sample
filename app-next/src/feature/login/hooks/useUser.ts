import { useQuery } from "@tanstack/react-query"
import { QueryKey } from "src/const"
import { apiClient } from "src/lib/axios"
import { UserResponse } from "../types/logintype"
import { usersNormalizer } from "src/feature/normalizer/userNormalizer"

const fetchUser = async () => {
    return await apiClient.get<UserResponse[]>("/users")
}

export const useUserList = () =>{
    const useResult = useQuery([QueryKey.user.user_get],fetchUser,
        {
            cacheTime: 3000,
        })
    const normalizedData = usersNormalizer(useResult.data?.data)
    return { 
        data : normalizedData,
    };
}
