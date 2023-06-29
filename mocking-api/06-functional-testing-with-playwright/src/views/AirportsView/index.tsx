import React from "react";
import { useCountries } from "../../hooks/useCountries";
import {
  Alert,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  List,
} from "@mui/material";
import { CountriesList } from "./CountriesList/CountriesList";
import { useAirports } from "../../hooks/useAirports";

export const AirportsView: React.FC = () => {
  const { data: countries, isFetching: areCountriesFetching } = useCountries();
  const { data: airports, isFetching: areAirportsFetching } = useAirports();

  if (areCountriesFetching || areAirportsFetching) {
    return <CircularProgress />;
  }

  if (!countries || !airports) {
    return (
      <Alert severity={"error"}>
        Unable to collect data. Please refresh the page.
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader title={"List of airports"} />
      <CardContent>
        <List>
          {countries.map((country) => (
            <CountriesList
              key={country.id}
              country={country}
              airports={airports}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
