"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { IconButton } from "@mui/material";
import Selector from "./Selector";
import RedButton from "./RedButton";

const CartItem = ({ id, coffee, isDrawer }) => {
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

	const coffeeImage = coffee.price_data.product_data.images[0];
	const coffeeName = coffee.price_data.product_data.name;
	const coffeePrice = (coffee.price_data.unit_amount_decimal / 100).toFixed(
		2
	);

	return (
		<>
			{isDrawer ? (
				<div>
					<Image
						className="mx-auto"
						src={coffeeImage}
						width={200}
						height={200}
						alt="Coffee Image"
					/>
					<p>{coffeeName}</p>
					<p>${coffeePrice}</p>
					<div className="flex justify-center">
						<div>
							<IconButton
								className="mx-1"
								onClick={handleLeftClick}
							>
								<ArrowCircleLeftOutlinedIcon />
							</IconButton>
							{coffee.quantity}
							<IconButton
								className="mx-1"
								onClick={handleRightClick}
							>
								<ArrowCircleRightOutlinedIcon />
							</IconButton>
						</div>
						<IconButton onClick={handleDelete}>
							<DeleteIcon />
						</IconButton>
					</div>
					<hr className="mt-4 drop-shadow" />
				</div>
			) : (
				<div className="border-t-2 py-10 mx-14">
					<div className="grid grid-col-1 lg:grid-cols-2">
						<div className="w-[300px] mx-auto lg:mx-0 bg-[#F5F5F5] rounded-lg">
							<Image
								className="mx-auto"
								src={coffeeImage}
								width={300}
								height={300}
								alt="Coffee Image"
							/>
						</div>
						<div className="pt-6 text-center lg:text-left rounded-lg">
							<div className="flex-none lg:flex lg:justify-between text-xl font-bold drop-shadow">
								<p className="text-wrap">{coffeeName}</p>
								<p className="pt-5 lg:pt-0">${coffeePrice}</p>
							</div>
							<div className="pt-4 lg:pt-40 flex justify-around lg:justify-between items-center">
								<Selector
									itemQuant={coffee.quantity}
									handleChange={handleChange}
								/>
								<RedButton
									text={"delete"}
									click={handleDelete}
									disabled={false}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CartItem;
