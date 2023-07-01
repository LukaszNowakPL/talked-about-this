# Example: Service integration

## Example explanation

This example project allows to make real api calls. However, the backend service listening for such calls, is a very simple mock component.

Backend component of example ecosystem is handled by `JSON server` library. It uses `/backend/db.json` file as a definition for data hosted by the service, as well as endpoints exposed by it. Normally it exposes endpoints for list of items, details of given item and also endpoints for creating, editing and deleting an item.

## Commands available

`npm install` for installing dependencies for overall environment.

`npm run install-all` for installing dependencies for backend and frontend components respectively.

`npm run all-components` will fire backend and frontend components locally. Frontend application will automatically open in the browser using http://localhost:3000/ url. Backend service is available under http://localhost:4000/ url.

## Libraries used

[Concurrently](https://www.npmjs.com/package/concurrently) Library allowing to run several npm commands concurrently (needed for `npm run install-all` and `npm run all-components` commands)

[JSON server](https://github.com/typicode/json-server) Library faking REST api. It allows to create schema, seeding data and exposing endpoints. Definition of endpoints and data they return is available on `/backend/db.json` file.
