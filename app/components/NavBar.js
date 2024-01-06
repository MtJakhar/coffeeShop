"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AuthModal from "./AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "@/hooks/useAuth";
import CartDrawer from "./CartDrawer";
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
		router.push("/shop");
	};

	const handleRoasters = (e) => {
		e.preventDefault();
		router.push("/shop");
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
						Coffee
					</h1>
					<div className="flex">
						<div
							className="font-bold text-2xl p-3 mx-3 border-white border-b-4 hover:border-black hover:cursor-pointer"
							onClick={handleShop}
						>
							Shop
						</div>
						<div className="font-bold text-2xl p-3 mx-3 border-white border-b-4 hover:border-black hover:cursor-pointer">
							Roaster
						</div>
					</div>
					<div className="flex">
						<div className="m-1">
							{loading ? null : (
								<>
									{data ? (
										<button
											type="button"
											className="w-[120px] h-[44px] border-[1px] border-[#D3D3D3] text-lg shadow-inner font-bold bg-white rounded hover:bg-[#F1F1F1] hover:border-black uppercase"
											onClick={logout}
										>
											Log out
										</button>
									) : (
										<AuthModal btn="login" />
									)}
								</>
							)}
						</div>
						<div className="m-1">
							<CartDrawer />
						</div>
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
};

export default NavBar;
