import { Alert } from "@mui/material";
import React, { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import RedButton from "./RedButton";

const LoginContent = ({
	inputs,
	handleClick,
	handleAuthClick,
	handleChangeInput,
	disabled,
}) => {
	const { error } = useContext(AuthenticationContext);
	return (
		<>
			<div>
				<div className="text-center pb-2">
					<h1 className="text-3xl drop-shadow font-bold pb-2">
						Log In
					</h1>
					<p className="text-xl">
						Don't have an Account?{" "}
						<span
							className="underline text-red-700 font-bold cursor-pointer"
							onClick={handleClick}
						>
							Sign Up
						</span>
					</p>
				</div>
				{error ? (
					<Alert severity="error" className="mb-4">
						{error}
					</Alert>
				) : null}
				<div>
					<input
						className="border rounded p-2 py-3 w-full m-1"
						placeholder="Email"
						id="email"
						name="email"
						type="email"
						value={inputs.email}
						onChange={handleChangeInput}
					/>
					<input
						className="border rounded p-2 py-3 w-full m-1"
						placeholder="Password"
						id="password"
						name="password"
						type="password"
						value={inputs.password}
						onChange={handleChangeInput}
					/>
				</div>
				<div className="w-[128px] mx-auto pt-4">
					<RedButton
						text={"log in"}
						disabled={disabled}
						click={handleAuthClick}
					/>
				</div>
			</div>
		</>
	);
};

export default LoginContent;
