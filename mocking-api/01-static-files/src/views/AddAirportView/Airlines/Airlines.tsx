import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { FormGroup } from "@mui/material";
import { AIRLINES } from "../../../utils/airlines";
import { Airline } from "./Airline";

export const Airlines: React.FC = () => {
  return (
    <TableRow>
      <TableCell align={"right"}>Airlines:</TableCell>
      <TableCell align={"left"}>
        <FormGroup>
          {AIRLINES.map((airline) => (
            <Airline key={airline.id} airline={airline} />
          ))}
        </FormGroup>
      </TableCell>
    </TableRow>
  );
};
