import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { FormGroup } from "@mui/material";
import { SERVICES } from "../../../utils/services";
import { Service } from "./Service";

export const Services: React.FC = () => {
  return (
    <TableRow>
      <TableCell align={"right"}>Services:</TableCell>
      <TableCell align={"left"}>
        <FormGroup>
          {SERVICES.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </FormGroup>
      </TableCell>
    </TableRow>
  );
};
