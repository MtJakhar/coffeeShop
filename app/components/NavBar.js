"use client"
import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AuthModal from "./AuthModal";


const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar className="flex">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo/Name
        </Typography>
        <AuthModal />
        <Button variant="contained">Cart</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
