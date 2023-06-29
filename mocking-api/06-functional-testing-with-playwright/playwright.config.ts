import { PlaywrightTestConfig } from "@playwright/test";

/**
 * https://playwright.dev/docs/test-configuration
 */
const config: PlaywrightTestConfig = {
  name: "playwright functional tests",
  testDir: "./test/functional",
  outputDir: "./test/functional/test-results",
  timeout: 5 * 1000,
  forbidOnly: false,
  reporter: [["list"], ["html", { outputFolder: "./reports/functional" }]],
  use: {
    browserName: "chromium",
    headless: true,
    viewport: { width: 1280, height: 720 },
    baseURL: "http://localhost:9000/",
    ignoreHTTPSErrors: true,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    testIdAttribute: "data-test-id",
  },
  webServer: {
    command: "npm run preview",
    url: "http://localhost:9000",
    reuseExistingServer: true,
  },
};

export default config;
