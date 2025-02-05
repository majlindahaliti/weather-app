import { useQuery } from "@tanstack/react-query";
import { fetchMainData } from "../queries/home.queries";

export const useFetchMainDataQuery = (latitude: number, longitude: number) => {
  return useQuery({
    queryKey: ["mainData", latitude, longitude],
    queryFn: () => fetchMainData(latitude, longitude),
  });
};
