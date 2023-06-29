import * as React from "react";
import { useField } from "formik";
import { Checkbox, FormControlLabel } from "@mui/material";
import { AirlineDto } from "../../../utils/airlines";
import { AddAirportForm } from "../../../utils/types";

interface AirlineProps {
  airline: AirlineDto;
}

export const Airline: React.FC<AirlineProps> = ({ airline: { id, name } }) => {
  const [{ value: selectedAirlines }, , { setValue }] =
    useField<AddAirportForm["airlines"]>("airlines");

  const handleAirlineClick = () => {
    if (selectedAirlines.includes(id)) {
    } else {
      setValue([...selectedAirlines, id]);
    }
  };

  return (
    <FormControlLabel
      onChange={handleAirlineClick}
      key={id}
      control={<Checkbox />}
      label={name}
      checked={selectedAirlines.includes(id)}
    />
  );
};
