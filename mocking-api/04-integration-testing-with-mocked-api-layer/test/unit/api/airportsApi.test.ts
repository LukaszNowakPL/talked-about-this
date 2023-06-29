import { axios } from "../../../src/api/rest/axios";
import {
  getAirport,
  getAirports,
  postAirport,
} from "../../../src/api/airports/airportsApi";
import mocked = jest.mocked;

jest.mock("../../../src/api/rest/axios");

describe("airportsApi", () => {
  test("get Airports() calls GET /airports endpoint and returns it's response", async () => {
    mocked(axios.get).mockResolvedValue(
      new Promise((resolve) => {
        resolve({ data: "getAirportsMock" });
      })
    );

    const data = await getAirports();
    expect(data).toEqual("getAirportsMock");
    expect(axios.get).toHaveBeenCalledWith("/airports");
  });

  test("getAirport() calls GET /airports/12345 endpoint and returns it's response", async () => {
    mocked(axios.get).mockResolvedValue(
      new Promise((resolve) => {
        resolve({ data: "getAirportMock" });
      })
    );

    const data = await getAirport(12345);
    expect(data).toEqual("getAirportMock");
    expect(axios.get).toHaveBeenCalledWith("/airports/12345");
  });

  test("postAirport() calls POST /airports endpoint, passes values received and returns endpoint's response", async () => {
    mocked(axios.post).mockResolvedValue(
      new Promise((resolve) => {
        resolve({ data: "postAirportMock" });
      })
    );

    const newAirport = {
      name: "test airport name",
      iata: "test airport iata",
      country: 12345,
      cities: "test airport cities",
      airlines: [1, 2, 3, 4, 5],
      services: [9, 8, 7, 6, 5],
    };

    const data = await postAirport(newAirport);
    expect(data).toEqual("postAirportMock");
    expect(axios.post).toHaveBeenCalledWith("/airports", newAirport);
  });
});
