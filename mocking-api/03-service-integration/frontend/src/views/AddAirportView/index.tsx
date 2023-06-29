import React from "react";
import {
  Alert,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
} from "@mui/material";
import { useCountries } from "../../hooks/useCountries";
import { FormProvider } from "./FormProvider/FormProvider";
import { AirportName } from "./AirportName/AirportName";
import { SubmitButton } from "./SubmitButton/SubmitButton";
import { AirportIata } from "./AirportIata/AirportIata";
import { AirportCities } from "./AirportCities/AirportCities";
import { Airlines } from "./Airlines/Airlines";
import { Services } from "./Services/Services";
import {Countries} from "./Countries/Countries";

export const AddAirportView: React.FC = () => {
  const { data: countries, isFetching } = useCountries();

  if (isFetching) {
    return <CircularProgress />;
  }

  if (!countries) {
    return (
      <Alert severity={"error"}>
        Unable to collect countries data. Please refresh the page.
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader title={"Add airport"} />
      <CardContent sx={{width: '50%'}}>
        <FormProvider>
          <AirportName />
          <AirportIata />
          <Countries countries={countries} />
          <AirportCities />
          <Airlines />
          <Services />
          <SubmitButton />
        </FormProvider>
      </CardContent>
    </Card>
  );
};
