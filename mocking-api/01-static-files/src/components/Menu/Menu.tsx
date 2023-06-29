import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../utils/constants";

interface Page {
  label: string;
  url: APP_ROUTES;
}

const pages: Page[] = [
  { label: "Countries", url: APP_ROUTES.COUNTRIES },
  { label: "Airports", url: APP_ROUTES.AIRPORTS },
  { label: "Add Airport", url: APP_ROUTES.ADD_AIRPORT },
];

export const Menu: React.FC = () => {
  const navigate = useNavigate();
  const handleMenuClick = (url: APP_ROUTES) => {
    navigate(url);
  };

  return (
    <AppBar position="static" sx={{marginBottom: 4}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            {pages.map(({ label, url }) => (
              <Button
                key={url}
                onClick={() => handleMenuClick(url)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
