import * as React from "react";
import { useField } from "formik";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ServiceDto } from "../../../utils/services";
import { AddAirportForm } from "../../../utils/types";

interface ServiceProps {
  service: ServiceDto;
}

export const Service: React.FC<ServiceProps> = ({ service: { id, name } }) => {
  const [{ value: selectedServices }, , { setValue }] =
    useField<AddAirportForm["services"]>("services");

  const handleServiceClick = () => {
    if (selectedServices.includes(id)) {
    } else {
      setValue([...selectedServices, id]);
    }
  };

  return (
    <FormControlLabel
      onChange={handleServiceClick}
      key={id}
      control={<Checkbox />}
      label={name}
      checked={selectedServices.includes(id)}
    />
  );
};
