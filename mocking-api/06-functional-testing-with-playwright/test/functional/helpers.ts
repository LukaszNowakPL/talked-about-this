import { Page } from "playwright-core";
import {expect} from '@playwright/test'

export const goTo = async (page: Page, url: string) => {
  await page.goto(url);
};

export const assertIsOn = async (page: Page, path: string) => {
  await page.waitForURL((url) => url.pathname === path);
  expect(page.url()).toMatch(`${path}`);
};
