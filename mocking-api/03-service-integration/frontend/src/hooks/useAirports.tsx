import { useQuery } from "@tanstack/react-query";
import { QUERIES } from "../utils/constants";
import {getAirports} from "../api/airports/airportsApi";

export const useAirports = () => {
  return useQuery({
    queryKey: [QUERIES.AIRPORTS],
    queryFn: getAirports,
    refetchOnWindowFocus: false,
  });
};
