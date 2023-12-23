"use client";

import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

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

	const sendCart = async(e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post("http://localhost:3000/api/checkout", stripeData);
			const { url } = data
			window.location.href = url
      localStorage.removeItem('cart');
		} catch(error) {
			console.error("Error", error)
		}
	}

	return (
		<>
			<div className="mx-auto text-center">
				<h1 className="m-1">
					Subtotal: ${!hydrated ? "0.00" : calculateTotal()}
				</h1>
				<Button className="bg-blue-500" variant="contained" onClick={sendCart}>
					Proceed to checkout
				</Button>
			</div>
		</>
	);
};

export default Checkout;