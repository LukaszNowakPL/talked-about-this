import Axios, { AxiosInstance } from "axios";

export const axios: AxiosInstance = Axios.create({
  baseURL: "/api",
});
