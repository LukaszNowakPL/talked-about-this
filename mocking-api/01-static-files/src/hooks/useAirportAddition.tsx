import { useMutation } from "@tanstack/react-query";
import { postAirport } from "../api/airports/airportsApi";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../utils/constants";

export const useAirportAddition = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postAirport,
    onSuccess: () => {
      navigate(APP_ROUTES.AIRPORTS);
    },
  });
};
