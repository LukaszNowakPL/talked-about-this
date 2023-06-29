import * as React from "react";
import {ListItemText} from "@mui/material";
import {getAirlineName} from "./Airline.helpers";
import {AIRLINES} from "../../../utils/airlines";

interface AirlineProps {
  id: number;
}

export const Airline: React.FC<AirlineProps> = ({id}) => {
  const name = getAirlineName(id, AIRLINES)
  return (
      <ListItemText primary={name} sx={{m: 0}} />
  );
};
