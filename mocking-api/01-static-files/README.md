# Example: Static files

## Example explanation

This example project mocks api calls by providing static files into publicly available asset folder. For application based on `Vite` or `CRA` it is usually a `/public` folder.

During local development, when application is making an api call, in fact it attempts to fetch an asset. So calling `/api/countries` endpoint will resolve with returning data stored on `/public/api/countries` file.

## Commands available

`npm install` for installing all dependencies.

`npm run dev` will fire up local environment. The application will automatically open in the browser using http://localhost:3000/ url.
