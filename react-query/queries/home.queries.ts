import axios from "../../initializations/axios";
import { MainResponse } from "@/interfaces/models/MainResponse.models";

export const fetchMainData = async (
  latitude: number,
  longitude: number,
  timezone: string
): Promise<MainResponse> => {
  const { data } = await axios.get("/", {
    params: {
      latitude,
      longitude,
      daily:
        "temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max",
      timezone,
    },
  });
  return data;
};
