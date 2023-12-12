"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { IconButton } from "@mui/material";
import Selector from "./Selector";

const CartItem = ({ id, coffee, isModal }) => {
	const { subtractFromCart, updateItemQty } = useContext(CartContext);
	const handleLeftClick = () => {
		if (coffee.quantity > 0) {
			updateItemQty(id, coffee.quantity - 1);
		}
	};

	const handleRightClick = () => {
		updateItemQty(id, coffee.quantity + 1);
	};

	const handleChange = (e) => {
		updateItemQty(id, e.target.value);
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
		<>
			{isModal ? (
				<div className="text-center">
					<Image
						className="mx-auto"
						src={coffeeImage}
						width={200}
						height={200}
						alt="Coffee Image"
					/>
					<p>{coffeeName}</p>
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
			) : (
				<div className="flex">
					<Image
						// className="mx-auto"
						src={coffeeImage}
						width={300}
						height={300}
						alt="Coffee Image"
					/>
					<div>
						<div className="flex">
							<p>{coffeeName}</p>
							<p>${coffeePrice}</p>
						</div>
						<div className="flex">
							<Selector
								itemQuant={coffee.quantity}
								handleChange={handleChange}
							/>
							<p className="text-red-500 hover:cursor-pointer" onClick={handleDelete}> Delete</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CartItem;
