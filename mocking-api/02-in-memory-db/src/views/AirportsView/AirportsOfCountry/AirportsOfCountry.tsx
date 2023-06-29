import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {AirportListItemDto} from "../../../api/airports/airportsApi.types";
import {AirportData} from "../AirportData/AirportData";

interface AirportsOfCountryProps {
    airports: AirportListItemDto[]
}

export const AirportsOfCountry: React.FC<AirportsOfCountryProps> = ({airports}) => {

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>IATA code</TableCell>
                        <TableCell>Cities served</TableCell>
                        <TableCell> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {airports.map((airport) => (
                        <AirportData key={airport.id} airport={airport} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
