import * as React from "react";
import {ListItemText} from "@mui/material";
import {getServiceName} from "./Service.helpers";
import {SERVICES} from "../../../utils/services";

interface ServiceProps {
  id: number;
}

export const Service: React.FC<ServiceProps> = ({id}) => {
  const name = getServiceName(id, SERVICES)
  return (
  <ListItemText primary={name}  sx={{m: 0}}  />
  );
};
