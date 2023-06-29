import { createServer, Model, Response } from "miragejs";
import { airports, countries } from "./data";

export function makeServer() {
  const server = createServer({
    models: {
      country: Model,
      airport: Model,
    },
  });

  server.db.loadData({
    countries,
    airports,
  });

  server.get("/api/countries", function (schema) {
    // @ts-ignore
    return this.serialize(schema.countries.all()).countries;
  });

  server.get("/api/airports", function (schema) {
    // @ts-ignore
    return this.serialize(schema.airports.all()).airports;
  });

  server.get("/api/airports/:id", function (schema, request) {
    // @ts-ignore
    return this.serialize(
      // @ts-ignore
      schema.airports.findBy({ id: request.params.id })
    ).airport;
  });

  server.post("/api/airports", (schema, request) => {
    const { country, name, iata, cities, airlines, services } = JSON.parse(
      request.requestBody
    );
    const attrs = {
      name,
      iata,
      cities,
      country_id: Number(country),
      airlines,
      services,
    };
    // @ts-ignore
    schema.airports.create(attrs);
    return new Response(201, {}, {});
    // return new Response(404, {"Content-Type" : "application/json"}, { error: `Some error message`});
  });
}
