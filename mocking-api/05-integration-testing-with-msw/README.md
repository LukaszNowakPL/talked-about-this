# Example: Integration testing using MSW

## Example explanation

This example project focuses on mocking api calls during Jest integration tests of React components using `MSW` library.

This approach is almost a copy of previous example. The difference is, that instead of mocking functions from an `api` layer, the api calls are listened and handled by `MSW` library.

Each test case contains own handling settings. The best approach is, when `MSW` handles only expected api calls with accuracy to indicated path params, query params and request body structure. Such approach ensures the way the component communicates with backend services. If some api call triggered during test case has not been handled by `MSW`, there is a proper information being printed into the console.

## Commands available

`npm install` for installing dependencies.

`npm run dev` will fire backend and frontend components locally. Example uses backend service available under sibling `./../03-service-integration` folder. So the command initially installs backend service dependencies and after that runs two components concurrently. Frontend application will automatically open in the browser using http://localhost:3000/ url. Backend service is available under http://localhost:4000/ url.

`npm run test` will fire up suite of integration tests performed with Jest

## Libraries used

[MSW](https://mswjs.io/) for mocking api calls on a service worker layer.
