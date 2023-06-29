import { CountryDto } from "../../../src/api/countries/countriesApi.types";
import { rest } from "msw";

export const countriesHandler = (
  response: CountryDto[],
  errorStatus: number = 200
) => {
  return rest.get("*/api/countries", (req, res, ctx) => {
    return res(
      errorStatus !== 200 ? ctx.status(errorStatus) : ctx.json(response)
    );
  });
};
