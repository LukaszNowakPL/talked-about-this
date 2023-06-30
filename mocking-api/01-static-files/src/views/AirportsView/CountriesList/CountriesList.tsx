import React from "react";
import { CountryDto } from "../../../api/countries/countriesApi.types";
import { Divider, ListItem, ListSubheader } from "@mui/material";
import { AirportsOfCountry } from "../AirportsOfCountry/AirportsOfCountry";
import { AirportListItemDto } from "../../../api/airports/airportsApi.types";

interface AirportsListProps {
  country: CountryDto;
  airports: AirportListItemDto[];
}

export const CountriesList: React.FC<AirportsListProps> = ({
  country,
  airports,
}) => {
  const airportsByCountry = airports.filter(
    ({ country_id }) => country_id === country.id
  );
  return (
    <>
      <ListSubheader>{country.name}</ListSubheader>
      <Divider />
      <ListItem>
        <AirportsOfCountry airports={airportsByCountry} />
      </ListItem>
    </>
  );
};
