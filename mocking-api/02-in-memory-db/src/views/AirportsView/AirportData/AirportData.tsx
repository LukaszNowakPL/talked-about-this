import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { generatePath, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../utils/constants";
import { AirportListItemDto } from "../../../api/airports/airportsApi.types";

interface AirportDataProps {
  airport: AirportListItemDto;
}

export const AirportData: React.FC<AirportDataProps> = ({
  airport: { id, name, iata, cities },
}) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(generatePath(APP_ROUTES.AIRPORT, { id: id.toString() }));
  };

  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>{name}</TableCell>
      <TableCell>{iata}</TableCell>
      <TableCell>{cities}</TableCell>
      <TableCell>
        <Button onClick={handleButtonClick}>Details</Button>
      </TableCell>
    </TableRow>
  );
};
