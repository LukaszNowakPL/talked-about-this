import { AirportListItemDto } from "../../../src/api/airports/airportsApi.types";

export const airportsMock: AirportListItemDto[] = [
  {
    id: 1,
    name: "test airport name",
    iata: "test iata code",
    cities: "test cities name",
    country_id: 1,
  },
];
