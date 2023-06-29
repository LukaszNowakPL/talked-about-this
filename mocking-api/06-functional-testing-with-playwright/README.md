# Example: Functional testing using Playwright

## Example explanation

ToDo: Add description

## Commands available

`npm install` for installing dependencies.

`npm run dev` will fire backend and frontend components locally. Example uses backend service available under sibling `./../03-service-integration` folder. So the command initially installs backend service dependencies and after that runs two components concurrently. Frontend application will automatically open in the browser using http://localhost:3000/ url. Backend service is available under http://localhost:4000/ url.

`npm run build` will build production bundle of a frontend application. The bundle is necessary for performing tests using `Playwright`.

`npm run test` will fire up suite of functional tests performed with Playwright

## Libraries used

[Playwright](https://playwright.dev/) tool for performing e2e and functional testing.
