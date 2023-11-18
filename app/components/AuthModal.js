"use client";

import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";
import LoginContent from "./LoginContent";
import SignUpContent from "./SignUpContent";

const AuthModal = () => {
	const [open, setOpen] = useState(false);
	const [isLogin, setIsLogin] = useState(true);
	const [inputs, setInputs] = useState({
		firstName: "",
		lastName: "",
		address: "",
		phone: "",
		email: "",
		password: ""
	})

	const handleChangeInput = (e) => {
		setInputs({
			...inputs,
			[e.target.name] : e.target.value
		})
	}

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleClick = () => {
		setIsLogin(!isLogin);
		setInputs({
			firstName: "",
			lastName: "",
			address: "",
			phone: "",
			email: "",
			password: ""
		})
	};

	const renderContent = (LoginContent, SignupContent) => {
		if (isLogin) {
			return LoginContent;
		} else {
			return SignupContent;
		}
	};

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	return (
		<div>
			<Button variant="contained" onClick={handleOpen}>
				Log In
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{renderContent(
						<LoginContent
							isLogin={isLogin}
							setIsLogin={setIsLogin}
							inputs={inputs}
							handleClick={handleClick}
							handleChangeInput={handleChangeInput}
						/>,
						<SignUpContent
							isLogin={isLogin}
							setIsLogin={setIsLogin}
							inputs={inputs}
							handleClick={handleClick}
							handleChangeInput={handleChangeInput}
						/>
					)}
				</Box>
			</Modal>
		</div>
	);
};

export default AuthModal;
