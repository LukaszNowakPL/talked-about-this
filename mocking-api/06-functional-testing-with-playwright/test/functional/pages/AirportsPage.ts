import { Page } from "@playwright/test";

export class AirportsPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public async clickAddAirport() {
    await this.page.click('text=add airport')
  }
}
