import { axios } from "../rest/axios";
import { CountryDto } from "./countriesApi.types";

export const getCountries = async () => {
  const { data } = await axios.get<CountryDto[]>("/countries");
  return data;
};
