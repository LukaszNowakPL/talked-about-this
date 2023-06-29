import {Page} from 'playwright-core'
import {CountryDto} from "../../../src/api/countries/countriesApi.types";

export function mockCountriesResponse(page: Page, response: CountryDto[]) {
    return page.route('**/api/countries', (route) => {
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(response)
        })
    })
}