import { Button } from "@mui/material";
import { Input } from "postcss";
import React from "react";

const LoginContent = ({ isLogin, setIsLogin }) => {

  const handleClick = () => {
    setIsLogin(!isLogin)
  }

	return (
		<>
      <h1> Log In</h1>
			<div className="flex">
				<p>Don't have an Account? <span className="underline font-bold cursor-pointer" onClick={handleClick}>Sign Up</span></p>
			</div>
      <div>
        <input placeholder="Email" id="email" name="email" type="text" />
        <input placeholder="Password" id="password" name="password" type="text" />
      </div>
      <Button variant="contained" className="bg-red-500">SIGN IN</Button>
		</>
	);
};

export default LoginContent;
