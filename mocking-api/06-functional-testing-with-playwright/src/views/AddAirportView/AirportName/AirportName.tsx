import * as React from "react";
import { useField } from "formik";
import { AddAirportForm } from "../../../utils/types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";

export const AirportName: React.FC = () => {
  const [input] = useField<AddAirportForm["name"]>("name");

  return (
    <TableRow>
      <TableCell align={"right"}>Name:</TableCell>
      <TableCell align={"left"}>
        <TextField {...input} />
      </TableCell>
    </TableRow>
  );
};
