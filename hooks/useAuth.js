import { AuthenticationContext } from "@/app/context/AuthContext";
import axios from "axios";
import { deleteCookie } from "cookies-next";
import { useContext } from "react";

const useAuth = () => {
	const { setAuthState } = useContext(AuthenticationContext);

	const login = async ({ email, password }, handleClose) => {
		setAuthState({
			data: null,
			error: null,
			loading: true,
		});
		try {
			const response = await axios.post("/api/auth/login", {
				email,
				password,
			});
			setAuthState({
				data: response.data,
				error: null,
				loading: false,
			});
			handleClose();
		} catch (error) {
			setAuthState({
				data: null,
				error: error.response.data.errorMessage,
				loading: false,
			});
		}
	};

	const signup = async (
		{ firstName, lastName, address, email, phone, password },
		handleClose
	) => {
		setAuthState({
			data: null,
			error: null,
			loading: true,
		});
		try {
			const response = await axios.post("/api/auth/signup", {
				firstName,
				lastName,
				address,
				phone,
				email,
				password,
			});
			setAuthState({
				data: response.data,
				error: null,
				loading: false,
			});
			handleClose();
		} catch (error) {
			setAuthState({
				data: null,
				error: error.response.data.errorMessage,
				loading: false,
			});
		}
	};

	const logout = () => {
		deleteCookie("jwt");

		setAuthState({
			data: null,
			error: null,
			loading: false,
		});
	};

	return {
		login,
		signup,
		logout,
	};
};

export default useAuth;
