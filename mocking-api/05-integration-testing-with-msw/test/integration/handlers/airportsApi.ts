import { rest } from "msw";
import {
  AirportListItemDto,
  AirportModel,
} from "../../../src/api/airports/airportsApi.types";
import { isBodySame } from "./helpers";

export const airportsHandler = (
  response: AirportListItemDto[],
  errorStatus: number = 200
) => {
  return rest.get("*/api/airports", (req, res, ctx) => {
    return res(
      errorStatus !== 200 ? ctx.status(errorStatus) : ctx.json(response)
    );
  });
};

export const postAirportHandler = (
  formData: AirportModel,
  errorStatus: number = 200
) => {
  return rest.post("*/api/airports", (req, res, ctx) => {
    if (errorStatus === 200 && isBodySame(formData, req)) {
      return res(ctx.json({}));
    } else {
      return ctx.status(errorStatus);
    }
  });
};
