import { test } from "@playwright/test";
import { AirportsPage } from "./pages/AirportsPage";
import { mockCountriesResponse } from "./mocks/mockCountriesResponse";
import { countryMock } from "./fixtures/countryMock";
import { airportListMock } from "./fixtures/airportListMock";
import { assertIsOn, goTo } from "./helpers";
import {AddAirportPage} from "./pages/AddAirportPage";
import {Mockiavelli} from "mockiavelli";
import {mockPostAirportsRequest} from "./mocks/mockPostAirportsRequest";
import {mockGetAirportsRequest} from "./mocks/mockGetAirportsRequest";
import {expect} from '@playwright/test'

test.describe("Add airport journey", () => {
  let mockiavelli: Mockiavelli;

  let airportsPage: AirportsPage;
  let addAirportPage: AddAirportPage;

  test.beforeEach(async ({ page }) => {
    mockiavelli = await Mockiavelli.setup(page);

    await mockCountriesResponse(page, [countryMock]);

    airportsPage = new AirportsPage(page);
    addAirportPage = new AddAirportPage(page);
  });

  test("Go through user journey", async ({ page }) => {
    mockGetAirportsRequest(mockiavelli, [airportListMock])
    const postAirportMock = mockPostAirportsRequest(mockiavelli)

    // Given I'm on a starting page
    await goTo(page, "/");
    await assertIsOn(page, '/airports');

    // When I click on details of test airport
    await airportsPage.clickAddAirport()

    // Then I am redirected to new page
    await assertIsOn(page, '/airports/add')

    // When I fill the form
    await addAirportPage.fillForm({name: 'new airport name', iataCode: 'AAA', country: countryMock.name, citiesServed: 'new cities served', airlines: ['PLL Lot', 'Vueling'], services: ['Fast track']})

    // And add an airport
    await addAirportPage.addAirport()

    // Then application passes new airport data
    const postAirportRequest = await postAirportMock.waitForRequest();
    expect(postAirportRequest.body).toEqual({
      name: 'new airport name',
      iata: 'AAA',
      country: 1,
      cities: 'new cities served',
      airlines: [1, 3],
      services: [4]
    })

    // And I am redirected to new page
    await assertIsOn(page, '/airports')
  });
});
