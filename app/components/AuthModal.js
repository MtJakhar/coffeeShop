"use client";

import useAuth from "@/hooks/useAuth";
import { Box, CircularProgress, Modal } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import LoginContent from "./LoginContent";
import SignUpContent from "./SignUpContent";

const AuthModal = ({ btn }) => {
	const [open, setOpen] = useState(false);
	const [isLoginModal, setIsLoginModal] = useState(true);
	const [inputs, setInputs] = useState({
		firstName: "",
		lastName: "",
		address: "",
		phone: "",
		email: "",
		password: "",
	});
	const { loading, error } = useContext(AuthenticationContext);
	const { login, signup } = useAuth();

	const handleChangeInput = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClick = () => {
		setIsLoginModal(!isLoginModal);
		setInputs({
			firstName: "",
			lastName: "",
			address: "",
			phone: "",
			email: "",
			password: "",
		});
	};

	const handleAuthClick = () => {
		if (isLoginModal) {
			login(
				{ email: inputs.email, password: inputs.password },
				handleClose
			);
		} else {
			signup(inputs, handleClose);
		}
	};

	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (isLoginModal) {
			if (inputs.password && inputs.email) {
				return setDisabled(false);
			}
		} else {
			if (
				inputs.firstName &&
				inputs.lastName &&
				inputs.email &&
				inputs.password &&
				inputs.address &&
				inputs.phone
			) {
				return setDisabled(false);
			}
		}

		setDisabled(true);
	}, [inputs]);

	const renderContent = (LoginContent, SignupContent) => {
		if (isLoginModal) {
			return LoginContent;
		} else {
			return SignupContent;
		}
	};

	const buttonSelector = () => {
		if (btn === "login") {
			return (
				<button
					type="button"
					className="w-28 h-10 border-[1px] border-[#D3D3D3] shadow-inner font-bold bg-white rounded hover:bg-[#F1F1F1] hover:border-black uppercase"
					onClick={handleOpen}
				>
					Log In
				</button>
			);
		}
		if (btn === "banner") {
			return (
				<button
					type="button"
					className="text-white w-40 h-12 shadow-[#505050] hover:shadow-[rgb(80,80,80)] rounded-md bg-[#f53c32] hover:shadow-md hover:bg-[#d34d43] text-lg uppercase"
					onClick={handleOpen}
				>
					Get Started
				</button>
			);
		}
		if (btn === "review") {
			return (
				<button
					type="button"
					className="text-white w-40 h-12 shadow-[#505050] hover:shadow-[rgb(80,80,80)] rounded-md bg-[#f53c32] hover:shadow-md hover:bg-[#d34d43] text-lg uppercase"
					onClick={handleOpen}
				>
					Log In
				</button>
			);
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
		borderRadius: "15px",
		boxShadow: 24,
		p: 4,
	};

	return (
		<div>
			{buttonSelector(btn)}
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					{loading ? (
						<div className="py-24 px-2 h-[200px] flex justify-center">
							<CircularProgress />
						</div>
					) : (
						renderContent(
							<LoginContent
								inputs={inputs}
								handleClick={handleClick}
								handleAuthClick={handleAuthClick}
								handleChangeInput={handleChangeInput}
								disabled={disabled}
								error={error}
							/>,
							<SignUpContent
								inputs={inputs}
								handleClick={handleClick}
								handleAuthClick={handleAuthClick}
								handleChangeInput={handleChangeInput}
								disabled={disabled}
								error={error}
							/>
						)
					)}
				</Box>
			</Modal>
		</div>
	);
};

export default AuthModal;
