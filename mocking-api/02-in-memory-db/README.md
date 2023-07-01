# Example: In-memory db

## Example explanation

This example project mocks api calls using `Mirage` library.

It reroutes api calls, so instead of real network connections they are handed over to the library. Only predefined endpoints are handled by `Mirage`. The response data may be related with internal data. In fact, `Mirage` is also some kind of small database allowing to create schemas, relations and seed it with static data.

`Mirage` configuration is available on `/src/server/server.ts` file.

## Commands available

`npm install` for installing all dependencies.

`npm run dev` will fire up local environment. The application will automatically open in the browser using http://localhost:3000/ url. During start of the application, `Mirage` creates an empty database, form it according to the schema definition and seed with static data.

## Libraries used

[Mirage](https://miragejs.com/) The library will start up a local db server once `VITE_APP_USE_MIRAGEJS` environment property is set to `true`. The property is set on `.env` file for local development.