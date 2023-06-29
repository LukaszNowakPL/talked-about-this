import { Routes, Route, Navigate } from "react-router-dom";
import * as React from "react";
import { APP_ROUTES } from "../../utils/constants";
import { AirportsView } from "../../views/AirportsView";
import {CountriesView} from "../../views/CountriesView";
import {AirportView} from "../../views/AirportView";
import {AddAirportView} from "../../views/AddAirportView";

export const MainRouter: React.FC = () => {
  return (
    <Routes>
        <Route path={APP_ROUTES.COUNTRIES} element={<CountriesView />} />
        <Route path={APP_ROUTES.AIRPORTS} element={<AirportsView />} />
        <Route path={APP_ROUTES.AIRPORT} element={<AirportView />} />
        <Route path={APP_ROUTES.ADD_AIRPORT} element={<AddAirportView />} />
      <Route path="*" element={<Navigate to={APP_ROUTES.AIRPORTS} />} />
    </Routes>
  );
};
