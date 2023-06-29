import "@testing-library/jest-dom/extend-expect";
import { configure } from "@testing-library/react";

import { server } from "./mocks/server";

// Reporting unhandled api calls
beforeAll(() =>
  server.listen({
    onUnhandledRequest(req) {
      console.error(
        "Found an unhandled %s request to %s",
        req.method,
        req.url.href
      );
    },
  })
);

// Reset all handlers, so they don't affect next test scenarios
afterEach(() => server.resetHandlers());

// Cleanup after all tests
afterAll(() => server.close());

// Use data-test-id as a data identification handler
configure({
  testIdAttribute: "data-test-id",
});
