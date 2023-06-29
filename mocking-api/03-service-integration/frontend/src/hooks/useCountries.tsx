import { useQuery } from "@tanstack/react-query";
import { QUERIES } from "../utils/constants";
import { getCountries } from "../api/countries/countriesApi";

export const useCountries = () => {
  return useQuery({
    queryKey: [QUERIES.COUNTRIES],
    queryFn: getCountries,
    refetchOnWindowFocus: false,
  });
};
