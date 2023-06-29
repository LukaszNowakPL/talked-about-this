import * as React from "react";
import { List, TableRow, TableCell } from "@mui/material";
import { Airline } from "../Airline/Airline";

interface AirlinesProps {
  airlines: number[];
}

export const Airlines: React.FC<AirlinesProps> = ({ airlines }) => {
  return (
    <TableRow>
      <TableCell align={"right"} sx={{ verticalAlign: "top" }}>
        Airlines:
      </TableCell>
      <TableCell align={"left"}>
        <List sx={{ p: 0 }}>
          {airlines.map((id) => (
            <Airline key={id} id={id} />
          ))}
        </List>
      </TableCell>
    </TableRow>
  );
};
