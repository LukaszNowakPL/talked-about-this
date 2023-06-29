import * as React from "react";
import { useField } from "formik";
import { Radio, FormControlLabel } from "@mui/material";
import { AddAirportForm } from "../../../utils/types";
import {CountryDto} from "../../../api/countries/countriesApi.types";

interface CountryProps {
  country: CountryDto;
}

export const Country: React.FC<CountryProps> = ({ country: { id, name } }) => {
  const [{ value: selectedCountry }, , { setValue }] =
    useField<AddAirportForm["country"]>("country");

  const handleCountryClick = () => {
      setValue(id);
  };

  return (
    <FormControlLabel
      onChange={handleCountryClick}
      key={id}
      control={<Radio />}
      label={name}
      checked={selectedCountry===id}
    />
  );
};
