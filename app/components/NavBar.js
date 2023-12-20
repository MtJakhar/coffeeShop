"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import AuthModal from "./AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "@/hooks/useAuth";
import CartModal from "./CartModal";
import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider } from "@mui/material";

const NavBar = () => {
	const router = useRouter();
	const { data, loading } = useContext(AuthenticationContext);
	const { logout } = useAuth();
	const handleClick = (e) => {
		e.preventDefault();
		router.push("/");
	};

	const handleShop = (e) => {
		e.preventDefault();
		router.push("shop");
	};

	const handleRoasters = (e) => {
		e.preventDefault();
		router.push("shop");
	};

	// off white #FAF9F6, bone white #F9F6EE, Ivory #FFFFF0
	const theme = createTheme({
		palette: {
			primary: {
				main: "#FFFFFF",
			},
			secondary: {
				main: "#000000",
			},
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<AppBar position="sticky">
				<Toolbar className="flex justify-between">
					<h1
						className="hover:cursor-pointer font-bold text-6xl text-black m-5"
						onClick={handleClick}
					>
						Trade
					</h1>
					<div className="flex">
						<div
							className="font-bold text-2xl p-3 m-3 border-white border-b-4 hover:border-black hover:cursor-pointer"
							onClick={handleShop}
						>
							Shop
						</div>
						<div className="font-bold text-2xl p-3 m-3 border-white border-b-4 hover:border-black hover:cursor-pointer">
							Roaster
						</div>
					</div>
					<div className="flex">
						<div className="m-1">
							{loading ? null : (
								<>
									{data ? (
										<Button onClick={logout}>Logout</Button>
									) : (
										<AuthModal />
									)}
								</>
							)}
						</div>
						<div className="m-1">
							<CartModal />
						</div>
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
};

export default NavBar;
