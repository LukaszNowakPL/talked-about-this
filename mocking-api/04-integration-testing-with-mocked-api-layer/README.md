# Example: Integration testing using mocked api layer

## Example explanation

ToDo: Add description

## Commands available

`npm install` for installing dependencies.

`npm run dev` will fire backend and frontend components locally. Example uses backend service available under sibling `./../03-service-integration` folder. So the command initially installs backend service dependencies and after that runs two components concurrently. Frontend application will automatically open in the browser using http://localhost:3000/ url. Backend service is available under http://localhost:4000/ url.

`npm run test` will fire up suite of integration tests performed with Jest

## Libraries used

[Jest](https://jestjs.io/) for testing purposes.

[React Testing Library](https://testing-library.com/) Testing utilities helping write more authoritative integration tests.
