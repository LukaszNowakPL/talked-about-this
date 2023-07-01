# Example: Integration testing using mocked api layer

## Example explanation

This example project focuses on mocking api calls during Jest integration tests of React components.

This approach benefits with `Component / Hook / Api` architectural pattern of React application. The `api` is a very thin layer of an application. In fact, they are functions passing their arguments directly into api call managed by axios and returning data fetched. They are stored on `/src/api` folder.

Thanks to such architectural pattern, developer is able to mock api function on Jest integration tests. Then the api call is never triggered, however, the function may return data (mimics 200 response) or reject (mimics 4xx/5xx types of response).

Api layer is being tested with `unit` test suite. Those tests assure that the function calls expected endpoint as well as returns fetched data.

## Commands available

`npm install` for installing dependencies.

`npm run dev` will fire backend and frontend components locally. Example uses backend service available under sibling `./../03-service-integration` folder. So the command initially installs backend service dependencies and after that runs two components concurrently. Frontend application will automatically open in the browser using http://localhost:3000/ url. Backend service is available under http://localhost:4000/ url.

`npm run test` will fire up suite of integration tests performed with Jest

## Libraries used

[Jest](https://jestjs.io/) for testing purposes.

[React Testing Library](https://testing-library.com/) Testing utilities helping write more authoritative integration tests.
