"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AuthModal from "./AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "@/hooks/useAuth";
import CartModal from "./CartModal";

const NavBar = () => {
	const { data, loading } = useContext(AuthenticationContext);
	const { logout } = useAuth();
	return (
		<AppBar position="sticky">
			<Toolbar className="flex">
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Logo/Name
				</Typography>
				{loading ? null : (
					<>
						{data ? (
							<Button variant="contained" onClick={logout}>
								Logout
							</Button>
						) : (
							<AuthModal />
						)}
					</>
				)}
				<CartModal />
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
