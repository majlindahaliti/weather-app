import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "../initializations/axios";

export const GET = (
  url: string,
  options?: AxiosRequestConfig<any>
): Promise<AxiosResponse<any, any>> => {
  return axios.get(url, options);
};
