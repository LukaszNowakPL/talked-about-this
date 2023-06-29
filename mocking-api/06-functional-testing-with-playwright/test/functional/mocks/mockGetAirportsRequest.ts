import { Mockiavelli } from "mockiavelli";
import { AirportListItemDto } from "../../../src/api/airports/airportsApi.types";

export function mockGetAirportsRequest(
  mockiavelli: Mockiavelli,
  body: AirportListItemDto[],
  status: number = 200
) {
  return mockiavelli.mockGET("http://localhost:4000/api/airports", {
    status,
    body,
  });
}
