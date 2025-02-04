import { useQuery } from "@tanstack/react-query";
import { fetchMainData } from "../queries/home.queries";

export const useFetchMainDataQuery = (
  latitude: number,
  longitude: number,
  timezone: string
) => {
  return useQuery({
    queryKey: ["mainData", latitude, longitude, timezone],
    queryFn: () => fetchMainData(latitude, longitude, timezone),
  });
};
