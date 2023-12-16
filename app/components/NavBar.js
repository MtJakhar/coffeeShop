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
import { useRouter } from "next/navigation";

const NavBar = () => {
	const router = useRouter();
	const { data, loading } = useContext(AuthenticationContext);
	const { logout } = useAuth();
	const handleClick = (e) => {
		e.preventDefault();
		router.push("/");
	};

	return (
		<AppBar position="sticky">
			<Toolbar className="flex">
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
					className="hover:cursor-pointer"
					onClick={handleClick}
				>
					Coffee Shop
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
