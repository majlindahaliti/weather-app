import { useQuery } from "@tanstack/react-query";

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
