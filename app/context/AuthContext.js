"use client";

import axios from "axios";
import { getCookie } from "cookies-next";
import React, { useState, createContext, useEffect } from "react";

export const AuthenticationContext = createContext({
	loading: false,
	data: null,
	error: null,
	setAuthState: () => {},
});

export default function AuthContext({ children }) {
	const [authState, setAuthState] = useState({
		data: null,
		error: null,
		loading: true,
	});

	const fetchUser = async () => {
		setAuthState({
			data: null,
			error: null,
			loading: true,
		});

		try {
			const jwt = getCookie("jwt");
			if (!jwt) {
				return setAuthState({
					data: null,
					error: null,
					loading: false,
				});
			}

			const response = await axios.get("/api/auth/me", {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			});

			axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

			setAuthState({
				data: response.data,
				error: null,
				loading: false,
			});
		} catch (error) {
			setAuthState({
				data: null,
				error: error.response.data.errorMessage,
				loading: false,
			});
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<AuthenticationContext.Provider
			value={{
				...authState,
				setAuthState,
			}}
		>
			{children}
		</AuthenticationContext.Provider>
	);
}
