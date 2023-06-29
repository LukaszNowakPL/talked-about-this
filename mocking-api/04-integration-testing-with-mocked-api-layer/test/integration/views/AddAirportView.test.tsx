import * as React from "react";
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import { renderWithContexts } from "../utils/renderWithContexts";
import { countriesMock } from "../mocks/countriesApi";
import { AddAirportView } from "../../../src/views/AddAirportView";
import userEvent from "@testing-library/user-event";
import { AirportModel } from "../../../src/api/airports/airportsApi.types";
import {
  getAirlineNameById,
  getCountryNameById,
  getServiceNameById,
} from "../utils/helpers";
import { getCountries } from "../../../src/api/countries/countriesApi";
import mocked = jest.mocked;
import { postAirport } from "../../../src/api/airports/airportsApi";

jest.mock("../../../src/api/airports/airportsApi");
jest.mock("../../../src/api/countries/countriesApi");

describe("AddAirportView", () => {
  describe("Happy path", () => {
    it("renders data collected from endpoint", async () => {
      // Given getCountries mocked return value
      mocked(getCountries).mockReturnValue(countriesMock);

      // When AddAirportView render into the browser
      renderWithContexts(<AddAirportView />, {
        reactQuery: true,
        router: { entries: ["/airports/add"], path: "/airports/add" },
      });

      // Then loader is shown during call to fetching functions
      expect(screen.getByRole("progressbar", {})).toBeInTheDocument();

      // When loader disappear
      await waitForElementToBeRemoved(screen.getByRole("progressbar", {}));

      // Then fetched countries are shown
      expect(
        screen.getByRole("radio", { name: /poland/i })
      ).toBeInTheDocument();
    });

    it("sends new airport data into backend and redirect to /airports", async () => {
      const formData: AirportModel = {
        name: "new airport name",
        iata: "AAA",
        country: 1,
        cities: "new airport cities name",
        airlines: [1, 2],
        services: [1],
      };

      // Given getCountries mocked return value
      mocked(getCountries).mockReturnValue(countriesMock);

      // And postAirports mocked return value
      mocked(postAirport).mockReturnValue(null);

      // And AddAirportView render into the browser
      const { history } = renderWithContexts(<AddAirportView />, {
        reactQuery: true,
        router: { entries: ["/airports/add"], path: "/airports/add" },
      });

      // And loader disappear
      await waitForElementToBeRemoved(screen.getByRole("progressbar", {}));

      // When user fill the form
      await userEvent.type(
        within(screen.getByRole("row", { name: /name/i })).getByRole(
          "textbox",
          {}
        ),
        formData.name
      );
      await userEvent.type(
        within(screen.getByRole("row", { name: /iata code/i })).getByRole(
          "textbox",
          {}
        ),
        formData.iata
      );
      await userEvent.click(
        within(screen.getByRole("row", { name: /country/i })).getByRole(
          "radio",
          { name: getCountryNameById(countriesMock, formData.country) }
        )
      );
      await userEvent.type(
        within(screen.getByRole("row", { name: /cities served/i })).getByRole(
          "textbox",
          {}
        ),
        formData.cities
      );
      const airlinesRow = within(
        screen.getByRole("row", { name: /airlines/i })
      );
      for (let airline in formData.airlines) {
        await userEvent.click(
          airlinesRow.getByRole("checkbox", {
            name: getAirlineNameById(formData.airlines[airline]),
          })
        );
      }
      const servicesRow = within(
        screen.getByRole("row", { name: /services/i })
      );
      for (let service in formData.services) {
        await userEvent.click(
          servicesRow.getByRole("checkbox", {
            name: getServiceNameById(formData.services[service]),
          })
        );
      }

      // And click Add airport button
      await userEvent.click(
        screen.getByRole("button", { name: /add airport/i })
      );

      // Normally loader should appear and form fields together with button should be disabled. And we should check it here. Then we should check if loader disappears

      // Then postAirport function is called with expected body
      expect(postAirport).toHaveBeenCalledWith(formData);

      // And user is redirected to /airports url
      await waitFor(() => expect(history.index).toBe(1));
      expect(history.location.pathname).toBe("/airports");
    }, 10000);
  });
  describe("Negative path", () => {
    it("displays error message once /countries endpoint return 500", async () => {
      // Given getCountries mocked rejection
      mocked(getCountries).mockRejectedValue(null);

      // When AddAirportView render into the browser
      renderWithContexts(<AddAirportView />, {
        reactQuery: true,
        router: { entries: ["/airports/add"], path: "/airports/add" },
      });

      // Then loader is shown during call to fetching functions
      expect(screen.getByRole("progressbar", {})).toBeInTheDocument();

      // When loader disappear
      await waitForElementToBeRemoved(screen.getByRole("progressbar", {}));

      // Then error message is shown
      expect(screen.getByRole("alert", {})).toHaveTextContent(
        "Unable to collect countries data. Please refresh the page."
      );
    });

    it("displays error message once POST /airports endpoint return 500", async () => {
      const formData: AirportModel = {
        name: "new airport name",
        iata: "AAA",
        country: 1,
        cities: "new airport cities name",
        airlines: [1, 2],
        services: [1],
      };

      // Given getCountries mocked return value
      mocked(getCountries).mockReturnValue(countriesMock);

      // And postAirport mocked rejection
      mocked(postAirport).mockRejectedValue(null);

      // And AddAirportView render into the browser
      renderWithContexts(<AddAirportView />, {
        reactQuery: true,
        router: { entries: ["/airports/add"], path: "/airports/add" },
      });

      // And loader disappear
      await waitForElementToBeRemoved(screen.getByRole("progressbar", {}));

      // And user fill the form
      await userEvent.type(
        within(screen.getByRole("row", { name: /name/i })).getByRole(
          "textbox",
          {}
        ),
        formData.name
      );
      await userEvent.type(
        within(screen.getByRole("row", { name: /iata code/i })).getByRole(
          "textbox",
          {}
        ),
        formData.iata
      );
      await userEvent.click(
        within(screen.getByRole("row", { name: /country/i })).getByRole(
          "radio",
          { name: getCountryNameById(countriesMock, formData.country) }
        )
      );
      await userEvent.type(
        within(screen.getByRole("row", { name: /cities served/i })).getByRole(
          "textbox",
          {}
        ),
        formData.cities
      );
      const airlinesRow = within(
        screen.getByRole("row", { name: /airlines/i })
      );
      for (let airline in formData.airlines) {
        await userEvent.click(
          airlinesRow.getByRole("checkbox", {
            name: getAirlineNameById(formData.airlines[airline]),
          })
        );
      }
      const servicesRow = within(
        screen.getByRole("row", { name: /services/i })
      );
      for (let service in formData.services) {
        await userEvent.click(
          servicesRow.getByRole("checkbox", {
            name: getServiceNameById(formData.services[service]),
          })
        );
      }

      // When user click Add airport button
      await userEvent.click(
        screen.getByRole("button", { name: /add airport/i })
      );

      // Then error message is shown
      expect(screen.getByRole("alert", {})).toHaveTextContent(
        "Unable to add airport. Please submit the data again."
      );
    }, 10000);
  });
});
