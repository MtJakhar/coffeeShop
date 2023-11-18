import { Button } from "@mui/material";
import React from "react";

const LoginContent = ({ inputs, handleClick, handleChangeInput }) => {

	return (
		<>
			<h1>Log In</h1>
			<div className="flex">
				<p>
					Don't have an Account?{" "}
					<span
						className="underline font-bold cursor-pointer"
						onClick={handleClick}
					>
						Sign Up
					</span>
				</p>
			</div>
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
			<Button variant="contained" className="bg-red-500">
				SIGN IN
			</Button>
		</>
	);
};

export default LoginContent;
