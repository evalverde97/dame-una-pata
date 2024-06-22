// src/components/NavBar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          component={Link}
          to="/"
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              Sobre Nosotros
            </Button>
            <Button color="inherit" component={Link} to="/adoptions">
              Adopciones
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contacto
            </Button>
          </Box>
        </Typography>
        <Button color="inherit" component={Link} to="/login">
          Ingresá
        </Button>
        <Button color="inherit" component={Link} to="/account">
          Tu Cuenta
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
