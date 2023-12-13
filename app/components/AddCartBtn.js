"use client";

import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "@mui/material";
import Selector from "./Selector";

const AddCartBtn = ({ coffee }) => {
	const [itemQuant, setItemQuant] = useState(1);
	const { cart, addToCart } = useContext(CartContext);

	const coffeeData = {
		itemId: coffee.id,
		stripeData: {
			price_data: {
				currency: "usd",
				product_data: {
					name: coffee.name,
					description: coffee.description,
					images: [coffee.image[1]],
				},
				unit_amount_decimal: parseFloat(coffee.price) * 100,
			},
			quantity: itemQuant,
		},
	};

	const handleChange = (e) => {
		setItemQuant(e.target.value);
	};

	const sendItem = (e) => {
		e.preventDefault();
		addToCart(coffeeData);
		console.log("item sent", cart);
	};

	return (
		<div className="flex">
			<Selector itemQuant={itemQuant} handleChange={handleChange} />
			<Button
				className="m-2 bg-slate-600"
				variant="contained"
				onClick={sendItem}
			>
				Add to Cart
			</Button>
		</div>
	);
};

export default AddCartBtn;
