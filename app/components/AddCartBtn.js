"use client";

import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
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
			<button
				type="button"
				className="w-72 h-[66px] shadow shadow-[#505050] hover:shadow-[#505050] rounded bg-[#f53c32] hover:shadow-md hover:bg-[#d34d43] text-[26px] text-white uppercase"
				onClick={sendItem}
			>
				Add to Cart
			</button>
		</div>
	);
};

export default AddCartBtn;
