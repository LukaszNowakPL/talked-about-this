import * as React from "react";
import { AirportsView } from "../../../src/views/AirportsView";
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { renderWithContexts } from "../utils/renderWithContexts";
import { countriesMock } from "../mocks/countriesApi";
import { airportsMock } from "../mocks/airportsApi";
import userEvent from "@testing-library/user-event";
import mocked = jest.mocked;
import { getAirports } from "../../../src/api/airports/airportsApi";
import { getCountries } from "../../../src/api/countries/countriesApi";

jest.mock("../../../src/api/airports/airportsApi");
jest.mock("../../../src/api/countries/countriesApi");

describe("AirportsView", () => {
  describe("Happy path", () => {
    it("renders data collected from endpoints", async () => {
      // Given getCountries mocked return value
      mocked(getCountries).mockReturnValue(countriesMock);

      // And getAirports mocked return value
      mocked(getAirports).mockReturnValue(airportsMock);

      // When AirportsView render into the browser
      renderWithContexts(<AirportsView />, {
        reactQuery: true,
        router: { entries: ["/airports"], path: "/airports" },
      });

      // Then loader is shown during call to fetching functions
      expect(screen.getByRole("progressbar", {})).toBeInTheDocument();

      // When loader disappear
      await waitForElementToBeRemoved(screen.getByRole("progressbar", {}));

      // Then fetched countries are shown
      expect(await screen.findByText(/poland/i)).toBeInTheDocument();

      // And fetched airport data is shown
      expect(
        screen.getByRole("cell", { name: /test airport name/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("cell", { name: /test iata code/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("cell", { name: /test cities name/i })
      ).toBeInTheDocument();
    });

    it("redirects to /airports/1 on details click", async () => {
      // Given getCountries mocked return value
      mocked(getCountries).mockReturnValue(countriesMock);

      // And getAirports mocked return value
      mocked(getAirports).mockReturnValue(airportsMock);

      // And AirportsView render into the browser
      const { history } = renderWithContexts(<AirportsView />, {
        reactQuery: true,
        router: { entries: ["/airports"], path: "/airports" },
      });

      // And loader disappear
      await waitForElementToBeRemoved(screen.getByRole("progressbar", {}));

      // When user click on details button
      await userEvent.click(screen.getByRole("button", { name: /details/i }));

      // Then they are redirected to /airports/1 url
      await waitFor(() => expect(history.index).toBe(1));
      expect(history.location.pathname).toBe("/airports/1");
    });
  });
  describe("Negative path", () => {
    it("displays error message once /countries endpoint return 500", async () => {
      // Given getCountries mocked rejection
      mocked(getCountries).mockRejectedValue(null);

      // And getAirports mocked return value
      mocked(getAirports).mockReturnValue([]);

      // When AirportsView render into the browser
      renderWithContexts(<AirportsView />, {
        reactQuery: true,
        router: { entries: ["/airports"], path: "/airports" },
      });

      // Then loader is shown during call to fetching functions
      expect(screen.getByRole("progressbar", {})).toBeInTheDocument();

      // When loader disappear
      await waitForElementToBeRemoved(screen.getByRole("progressbar", {}));

      // Then error message is shown
      expect(screen.getByRole("alert", {})).toHaveTextContent(
        "Unable to collect data. Please refresh the page."
      );
    });

    it("displays error message once /airports endpoint return 500", async () => {
      // Given getCountries mocked return value
      mocked(getCountries).mockReturnValue([]);

      // And getCountries mocked rejection
      mocked(getAirports).mockRejectedValue(null);

      // When AirportsView render into the browser
      renderWithContexts(<AirportsView />, {
        reactQuery: true,
        router: { entries: ["/airports"], path: "/airports" },
      });

      // Then loader is shown during call to fetching functions
      expect(screen.getByRole("progressbar", {})).toBeInTheDocument();

      // When loader disappear
      await waitForElementToBeRemoved(screen.getByRole("progressbar", {}));

      // Then error message is shown
      expect(screen.getByRole("alert", {})).toHaveTextContent(
        "Unable to collect data. Please refresh the page."
      );
    });
  });
});
