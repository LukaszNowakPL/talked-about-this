import "@testing-library/jest-dom/extend-expect";
import { configure } from "@testing-library/react";

// Use data-test-id as a data identification handler
configure({
  testIdAttribute: "data-test-id",
});
