"use client";

import React, { useState, useContext } from "react";
import CartContext from "../context/CartContext";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Image from "next/image";
import { IconButton } from "@mui/material";


const CheckOutCard = ({ id, coffee }) => {
	const { subtractFromCart, updateItemQty } = useContext(CartContext);
	const [qty, setQty] = useState(coffee.quantity);

	const handleLeftClick = () => {
		setQty(qty - 1);
		if(qty > 0) {
			updateItemQty(id, qty);
		} else {
			subtractFromCart(id)
		}
	};
	const handleRightClick = () => {
		setQty(qty + 1);
	};

	// const coffeeData = {
	// 	price_data: {
	// 		currency: "usd",
	// 		product_data: {
	// 			name: coffee.name,
	// 			description: coffee.description,
	// 			images: [coffee.image[1]]
	// 		},
	// 		unit_amount_decimal: parseFloat(coffee.price) * 100,
	// 	},
	// 	quantity: itemQuant
	// }

	const coffeeImage = coffee.price_data.product_data.images[0];
	const coffeeName = coffee.price_data.product_data.name;
	const coffeePrice = (coffee.price_data.unit_amount_decimal /100).toFixed(2);

	return (
		<div>
			<Image
				className="mx-auto"
				src={coffeeImage}
				width={200}
				height={200}
				alt="Coffee Image"
			/>
			<h1>{coffeeName}</h1>
			<p>${coffeePrice}</p>
      
			<div className="flex">
				<IconButton onClick={handleLeftClick}>
					<ArrowCircleLeftOutlinedIcon />
				</IconButton>
				{qty}
				<IconButton onClick={handleRightClick}>
					<ArrowCircleRightOutlinedIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default CheckOutCard;
