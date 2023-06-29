import * as React from "react";
import {List, TableRow, TableCell} from "@mui/material";
import {Service} from "../Service/Service";

interface ServicesProps {
  services: number[];
}

export const Services: React.FC<ServicesProps> = ({services}) => {
  return (
      <TableRow>
        <TableCell align={"right"} sx={{verticalAlign: 'top'}}>Services:</TableCell>
        <TableCell align={"left"}>
          <List  sx={{p: 0}}>
            {services.map((id) => (
                <Service key={id} id={id} />
            ))}
          </List>
        </TableCell>
      </TableRow>
  );
};
