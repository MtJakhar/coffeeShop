"use client";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import RedButton from "./RedButton";

const Checkout = () => {
	const { cart } = useContext(CartContext);
	const [hydrated, setHydrated] = useState(false);

	let total = 0;

	const calculateTotal = () => {
		cart.forEach((item) => {
			let itemPrice = item.stripeData.price_data.unit_amount_decimal;
			let quantity = item.stripeData.quantity;
			total += (itemPrice / 100) * parseFloat(quantity);
		});
		return total.toFixed(2);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			setHydrated(true);
		}
	}, []);

	const stripeData = cart.map((cartItem) => {
		return {
			price_data: cartItem.stripeData.price_data,
			quantity: cartItem.stripeData.quantity,
		};
	});

	const sendCart = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				"http://localhost:3000/api/checkout",
				stripeData
			);
			const { url } = data;
			window.location.href = url;
			localStorage.removeItem("cart");
		} catch (error) {
			console.error("Error", error);
		}
	};

	return (
		<div className="sm:col-span-2 xl:col-span-2">
			<div className="text-center bg-white text-black rounded-lg p-6 mt-6 mr-4">
				<h1 className="pb-3 text-xl font-bold">
					Subtotal
					<div>
						{!hydrated ? (
							<span className="text-red-700">$0.00</span>
						) : (
							<span className="text-red-700">
								${calculateTotal()}
							</span>
						)}
					</div>
				</h1>
				<RedButton text={"checkout"} click={sendCart} />
			</div>
		</div>
	);
};

export default Checkout;
