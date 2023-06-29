import * as React from "react";
import { AirportsView } from "../../../src/views/AirportsView";
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { renderWithContexts } from "../utils/renderWithContexts";
import { server } from "../mocks/server";
import { countriesHandler } from "../handlers/countriesApi";
import { countriesMock } from "../mocks/countriesApi";
import { airportsMock } from "../mocks/airportsApi";
import { airportsHandler } from "../handlers/airportsApi";
import userEvent from "@testing-library/user-event";

describe("AirportsView", () => {
  describe("Happy path", () => {
    it("renders data collected from endpoints", async () => {
      // Given /countries endpoint response
      server.use(countriesHandler(countriesMock));

      // And /airports endpoint response
      server.use(airportsHandler(airportsMock));

      // When AirportsView render into the browser
      renderWithContexts(<AirportsView />, {
        reactQuery: true,
        router: { entries: ["/airports"], path: "/airports" },
      });

      // Then loader is shown during api data fetch
      expect(screen.getByRole("progressbar", {})).toBeInTheDocument();

      // When loader disappear
      await waitForElementToBeRemoved(screen.getByRole("progressbar", {}));

      // Then fetched countries are shown
      expect(screen.getByText(/poland/i)).toBeInTheDocument();

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
      // Given /countries endpoint response
      server.use(countriesHandler(countriesMock));

      // And /airports endpoint response
      server.use(airportsHandler(airportsMock));

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
      // Given /countries endpoint error response
      server.use(countriesHandler([], 500));

      // And /airports endpoint response
      server.use(airportsHandler([]));

      // When AirportsView render into the browser
      renderWithContexts(<AirportsView />, {
        reactQuery: true,
        router: { entries: ["/airports"], path: "/airports" },
      });

      // Then loader is shown during api data fetch
      expect(screen.getByRole("progressbar", {})).toBeInTheDocument();

      // When loader disappear
      await waitForElementToBeRemoved(screen.getByRole("progressbar", {}));

      // Then error message is shown
      expect(screen.getByRole("alert", {})).toHaveTextContent(
        "Unable to collect data. Please refresh the page."
      );
    });

    it("displays error message once /airports endpoint return 500", async () => {
      // Given /countries endpoint response
      server.use(countriesHandler([]));

      // And /airports endpoint error response
      server.use(airportsHandler([], 500));

      // When AirportsView render into the browser
      renderWithContexts(<AirportsView />, {
        reactQuery: true,
        router: { entries: ["/airports"], path: "/airports" },
      });

      // Then loader is shown during api data fetch
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
