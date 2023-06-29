import React from "react";
import { useCountries } from "../../hooks/useCountries";
import {
  Alert,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export const CountriesView: React.FC = () => {
  const { data: countries, isFetching: isCountriesFetching } = useCountries();

  if (isCountriesFetching) {
    return <CircularProgress />;
  }

  if (!countries) {
    return (
      <Alert severity={"error"}>
        Unable to collect countries list. Please refresh the page.
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader title={"List of countries"} />
      <CardContent>
        <List>
          {countries.map(({ id, name }) => (
            <ListItem disablePadding key={id}>
              <ListItemText primary={`${name} (id: ${id})`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
