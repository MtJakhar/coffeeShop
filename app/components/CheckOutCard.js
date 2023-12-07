"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { IconButton } from "@mui/material";

const CheckOutCard = ({ id, coffee }) => {
	const { subtractFromCart, updateItemQty } = useContext(CartContext);

	const handleLeftClick = () => {
		if (coffee.quantity > 0) {
			updateItemQty(id, coffee.quantity - 1);
		}
	};

	const handleRightClick = () => {
		updateItemQty(id, coffee.quantity + 1);
	};

	const handleDelete = () => {
		subtractFromCart(id);
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
	const coffeePrice = (coffee.price_data.unit_amount_decimal / 100).toFixed(
		2
	);

	return (
		<div className="text-center">
			<Image
				className="mx-auto"
				src={coffeeImage}
				width={200}
				height={200}
				alt="Coffee Image"
			/>
			<p>${coffeePrice}</p>
			<div className="flex">
				<div>
					<IconButton onClick={handleLeftClick}>
						<ArrowCircleLeftOutlinedIcon />
					</IconButton>
					{coffee.quantity}
					<IconButton onClick={handleRightClick}>
						<ArrowCircleRightOutlinedIcon />
					</IconButton>
				</div>
				<div>
					<IconButton onClick={handleDelete}>
						<DeleteIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default CheckOutCard;
