import axios from "axios";
import { API_URL } from "../config/app";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

console.log("Axios instance created:", instance); // Check the instance

instance.interceptors.request.use(
  async (config) => {
    console.log(`Request URL: ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error("Error in interceptor:", error);
    return Promise.reject(error);
  }
);

export default instance;
