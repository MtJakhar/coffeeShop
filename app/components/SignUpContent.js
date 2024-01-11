import { Alert, Button } from "@mui/material";
import React, { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import RedButton from "./RedButton";

const SignUpContent = ({
	inputs,
	handleAuthClick,
	handleClick,
	handleChangeInput,
	disabled,
}) => {
	const { error } = useContext(AuthenticationContext);

	return (
		<>
			<div>
				<div className="text-center">
					<h1 className="text-3xl drop-shadow font-bold pb-2">
						Sign Up
					</h1>
					<p className="text-xl">
						Already have an Account?{"  "}
						<span
							className="underline text-red-700 font-bold cursor-pointer"
							onClick={handleClick}
						>
							Login
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
						placeholder="First Name"
						id="firstName"
						name="firstName"
						type="text"
						value={inputs.firstName}
						onChange={handleChangeInput}
					/>
					<input
						className="border rounded p-2 py-3 w-full m-1"
						placeholder="Last Name"
						id="lastName"
						name="lastName"
						type="text"
						value={inputs.lastName}
						onChange={handleChangeInput}
					/>
					<input
						className="border rounded p-2 py-3 w-full m-1"
						placeholder="Address"
						id="address"
						name="address"
						type="text"
						value={inputs.address}
						onChange={handleChangeInput}
					/>
					<input
						className="border rounded p-2 py-3 w-full m-1"
						placeholder="Phone"
						id="phone"
						name="phone"
						type="tel"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						value={inputs.phone}
						onChange={handleChangeInput}
					/>
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
					<p className="px-2">8 character minimum</p>
				</div>
				<div className="p-2 text-center">
					<div className="w-[128px] mx-auto">
						<RedButton
							text={"sign up"}
							disabled={disabled}
							click={handleAuthClick}
						/>
					</div>
					<div className="pt-4">
						<p>
							By creating an account I agree to Coffee Shop's{" "}
							<span className="underline text-red-700 font-bold">
								Privacy Policy
							</span>{" "}
							&{" "}
							<span className="underline text-red-700 font-bold">
								Terms of Services
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUpContent;
