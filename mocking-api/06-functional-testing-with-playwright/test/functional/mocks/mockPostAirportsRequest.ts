import { Mockiavelli } from "mockiavelli";

export function mockPostAirportsRequest(
  mockiavelli: Mockiavelli,
  status: number = 200
) {
  return mockiavelli.mockPOST("http://localhost:4000/api/airports", {
    status,
    body: {},
  });
}
