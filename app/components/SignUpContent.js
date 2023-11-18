import { Button } from "@mui/material";
import React from "react";

const SignUpContent = ({ inputs, handleClick, handleChangeInput }) => {

	return (
		<>
			<h1>Sign Up</h1>
			<div className="flex">
				<p>Already have an Account? <span className="underline font-bold cursor-pointer" onClick={handleClick}>Login</span></p>
			</div>
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
        <p>8 character minimum</p>
			</div>
			<Button variant="contained" className="bg-red-500">SIGN UP</Button>
      <div>
        <p>By creating an account I agree to Blank's <span className="underline font-bold">Privacy Policy</span> & <span className="underline font-bold">Terms of Services</span></p>
      </div>
		</>
	);
};

export default SignUpContent;
