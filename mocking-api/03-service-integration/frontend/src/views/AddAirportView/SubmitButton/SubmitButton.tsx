import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

export const SubmitButton: React.FC = () => {
  return (
    <TableRow>
      <TableCell> </TableCell>
      <TableCell align={"left"}>
        <Button variant={"contained"} type={"submit"}>
          Add airport
        </Button>
      </TableCell>
    </TableRow>
  );
};
