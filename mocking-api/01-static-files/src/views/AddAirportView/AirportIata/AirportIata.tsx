import * as React from "react";
import { useField } from "formik";
import { AddAirportForm } from "../../../utils/types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";

export const AirportIata: React.FC = () => {
  const [input] = useField<AddAirportForm["iata"]>("iata");

  return (
    <TableRow>
      <TableCell align={"right"}>IATA code:</TableCell>
      <TableCell align={"left"}>
        <TextField inputProps={{ maxLength: 3 }} {...input} />
      </TableCell>
    </TableRow>
  );
};
