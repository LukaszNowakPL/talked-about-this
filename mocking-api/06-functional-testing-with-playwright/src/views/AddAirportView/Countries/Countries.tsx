import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { FormGroup } from "@mui/material";
import { Country } from "./Country";
import {CountryDto} from "../../../api/countries/countriesApi.types";

interface CountriesProps {
    countries: CountryDto[]
}

export const Countries: React.FC<CountriesProps> = ({countries}) => {
  return (
    <TableRow>
      <TableCell align={"right"}>Country:</TableCell>
      <TableCell align={"left"}>
        <FormGroup>
          {countries.map((country) => (
            <Country key={country.id} country={country} />
          ))}
        </FormGroup>
      </TableCell>
    </TableRow>
  );
};
