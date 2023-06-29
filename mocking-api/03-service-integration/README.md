# Example: Service integration

## Example explanation

ToDo: Add description

## Commands available

`npm install` for installing dependencies for all environments.

`npm run install-all` for installing all dependencies for backend and frontend components.

`npm run all-components` will fire backend and frontend components locally. Frontend application will automatically open in the browser using http://localhost:3000/ url. Backend service is available under http://localhost:4000/ url.

## Libraries used

[Concurrently](https://www.npmjs.com/package/concurrently) Library allowing to run several npm commands concurrently (needed for `npm run install-all` and `npm run all-components` commands)

[JSON server](https://github.com/typicode/json-server) Library faking REST api. It allows to create schema, seeding data and exposing endpoints. Definition of endpoints and data they return is available on `/backend/db.json` file.
