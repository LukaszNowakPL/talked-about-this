import { SERVICES } from "../../../src/utils/services";
import { AIRLINES } from "../../../src/utils/airlines";
import { CountryDto } from "../../../src/api/countries/countriesApi.types";

export const getServiceNameById = (id: number) => {
  return SERVICES.find(({ id: serviceId }) => serviceId === id).name;
};
export const getAirlineNameById = (id: number) => {
  return AIRLINES.find(({ id: airlineId }) => airlineId === id).name;
};
export const getCountryNameById = (countries: CountryDto[], id: number) => {
  return countries.find(({ id: countryId }) => countryId === id).name;
};
