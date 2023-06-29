import { Page } from "@playwright/test";

export class AddAirportPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  formTestId = 'add-airport-form'

  public async fillForm({name, iataCode, country, citiesServed, airlines, services}: AddAirportForm) {

    const formSection = await this.getFormSection()

    await formSection.getByRole('row', {name: /name/i}).getByRole('textbox').type(name)
    await formSection.getByRole('row', {name: /iata code/i}).getByRole('textbox').type(iataCode)
    await formSection.getByRole('row', {name: /country/i}).getByRole('radio', {name: country}).click()
    await formSection.getByRole('row', {name: /cities served/i}).getByRole('textbox').type(citiesServed)
    for(let airline in airlines) {
      await formSection.getByRole('row', {name: /airlines/i}).getByRole('checkbox', {name: airlines[airline]}).click()
    }
    for(let service in services) {
      await formSection.getByRole('row', {name: /services/i}).getByRole('checkbox', {name: services[service]}).click()
    }
  }

  public async addAirport() {
    const formSection = await this.getFormSection()
    await formSection.getByRole('button', {name: /add airport/i}).click()
  }

  private async getFormSection() {
    return this.page.getByTestId(this.formTestId)
  }
}

interface AddAirportForm {
  name: string;
  iataCode: string;
  country: string;
  citiesServed: string;
  airlines: string[];
  services: string[];
}