import React from "react";
import {
  Alert,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
} from "@mui/material";
import { useAirport } from "../../hooks/useAirport";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {Airlines} from "./Airlines/Airlines";
import {Services} from "./Services/Service";

export const AirportView: React.FC = () => {
  let { id } = useParams();
  const { data: airport, isFetching: isAirportFetching } = useAirport(
    Number(id)
  );

  if (isAirportFetching) {
    return <CircularProgress />;
  }

  if (!airport) {
    return (
      <Alert severity={"error"}>
        Unable to collect airport data. Please refresh the page.
      </Alert>
    );
  }

  const { name, iata, cities, airlines, services } = airport;

  return (
    <Card>
      <CardHeader title={`${name} (${iata})`} />
      <CardContent sx={{width: '50%'}}>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align={"right"}>Cities served:</TableCell>
                <TableCell align={"left"}>{cities}</TableCell>
              </TableRow>
              <Airlines airlines={airlines} />
              <Services services={services} />
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
