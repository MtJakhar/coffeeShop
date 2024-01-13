"use client";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import RedButton from "../../components/RedButton";

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
			const { data } = await axios.post("/api/checkout", stripeData);
			const { url } = data;
			window.location.href = url;
			localStorage.removeItem("cart");
		} catch (error) {
			console.error("Error", error);
		}
	};

	return (
		<>
			{cart.length === 0 ? (
				<div></div>
			) : (
				<div className="flex-auto w-1/5 h-36 text-center bg-white text-black shadow-lg rounded-lg m-6 ">
					<div className="p-4">
						<h1 className="text-2xl font-bold pb-2">
							<p>Subtotal</p>
							<div className="text-xl">
								{!hydrated ? (
									<span className="text-red-700">$0.00</span>
								) : (
									<span className="text-red-700">
										${calculateTotal()}
									</span>
								)}
							</div>
						</h1>
						<div className="">
							<RedButton
								text={"checkout"}
								click={sendCart}
								disabled={false}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Checkout;
