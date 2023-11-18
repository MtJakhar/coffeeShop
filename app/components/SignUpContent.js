import { Button } from "@mui/material";
import React from "react";

const SignUpContent = ({ isLogin, setIsLogin }) => {

  const handleClick = () => {
    setIsLogin(!isLogin)
  }

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
				/>
				<input
					className="border rounded p-2 py-3 w-full m-1"
					placeholder="Last Name"
					id="lastName"
					name="lastName"
					type="text"
				/>
				<input
					className="border rounded p-2 py-3 w-full m-1"
					placeholder="Email"
					id="email"
					name="email"
					type="text"
				/>
				<input
					className="border rounded p-2 py-3 w-full m-1"
					placeholder="Password"
					id="password"
					name="password"
					type="text"
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
