import axiosBase from "axios";

export const apiClient = axiosBase.create(
    {
        baseURL: "http://localhost:3444",//TODO envで管理する
        headers: {
            "Content-Type": "application/json",
        },
        responseType: "json",
        withCredentials: true,
    }
);