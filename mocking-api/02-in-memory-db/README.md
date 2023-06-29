# Example: In-memory db

## Example explanation

ToDo: Add description

## Commands available

`npm install` for installing all dependencies.

`npm run dev` will fire up local environment. The application will automatically open in the browser using http://localhost:3000/ url.

## Libraries used

[Mirage](https://miragejs.com/) The library will start up a local db server once `VITE_APP_USE_MIRAGEJS` environment property is set to `true`. The property is set on `.env` file for local development.