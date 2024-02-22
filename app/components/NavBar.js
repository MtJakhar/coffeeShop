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
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
						className="hover:cursor-pointer font-bold text-4xl text-black"
						onClick={handleClick}
					>
						Coffee
					</h1>
					<div>
						<div
							className="font-bold border-white border-b-[3px] hover:border-red-600 hover:cursor-pointer"
							onClick={handleShop}
						>
							Shop
						</div>
					</div>
					<div className="flex">
						<div className="m-1">
							{loading ? null : (
								<>
									{data ? (
										<button
											type="button"
											className="w-28 h-10 border-[1px] border-[#D3D3D3] shadow-inner font-bold bg-white rounded hover:bg-[#F1F1F1] hover:border-black uppercase"
											onClick={logout}
										>
											log out
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
