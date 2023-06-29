import Axios, { AxiosInstance } from "axios";

export const axios: AxiosInstance = Axios.create({
  baseURL: `${import.meta.env.VITE_APP_BACKEND_DOMAIN}/api`,
});
