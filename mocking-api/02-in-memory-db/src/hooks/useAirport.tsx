import { useQuery } from "@tanstack/react-query";
import { QUERIES } from "../utils/constants";
import {getAirport} from "../api/airports/airportsApi";

export const useAirport = (id: number) => {
  return useQuery({
    queryKey: [QUERIES.AIRPORT, id],
    queryFn: () => getAirport(id),
    refetchOnWindowFocus: false,
  });
};
