# Example: Functional testing using Playwright

## Example explanation

This example project focuses on mocking api calls during functional tests of React application using `Playwright`.

The approach to functional tests is very similar to approach to integration tests presented on previous example. The difference is only on tools used, as well as the fact, that `Playwright` tests production bundle of entire application, instead of React component.

Api calls may be mocked with two approaches. Playwright native solution uses `route` function of `page` object. `Mockiavelli` library, however, is used to differentiate handling of GET, POST calls to the same endpoint, and then checking structure of request body.

## Commands available

`npm install` for installing dependencies.

`npm run dev` will fire backend and frontend components locally. Example uses backend service available under sibling `./../03-service-integration` folder. So the command initially installs backend service dependencies and after that runs two components concurrently. Frontend application will automatically open in the browser using http://localhost:3000/ url. Backend service is available under http://localhost:4000/ url.

`npm run build` will build production bundle of a frontend application. The bundle is necessary for performing tests using `Playwright`.

`npm run test` will fire up suite of functional tests performed with Playwright

## Libraries used

[Playwright](https://playwright.dev/) tool for performing e2e and functional testing.

[Mockiavelli](https://www.npmjs.com/package/mockiavelli) HTTP request mocking library for `Playwright` and `Puppeteer`.
