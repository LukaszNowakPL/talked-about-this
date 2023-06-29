import * as React from "react";
import { Form, Formik } from "formik";
import { AddAirportForm } from "../../../utils/types";
import {
  Alert,
  CircularProgress,
  Table,
  TableBody,
  TableContainer,
} from "@mui/material";
import { useAirportAddition } from "../../../hooks/useAirportAddition";

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const { mutateAsync: addAirport, isLoading, isError } = useAirportAddition();
  const handleSubmit = async (formData: AddAirportForm) => {
    await addAirport(formData);
  };

  return (
    <>
      {isLoading && <CircularProgress />}
      {isError && !isLoading && (
        <Alert severity={"error"}>
          Unable to add airport. Please submit the data again.
        </Alert>
      )}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <TableContainer>
            <Table>
              <TableBody>{children}</TableBody>
            </Table>
          </TableContainer>
        </Form>
      </Formik>
    </>
  );
};

const initialValues: AddAirportForm = {
  country: 0,
  name: "",
  iata: "",
  cities: "",
  airlines: [],
  services: [],
};
