"use client";

import { Button, Box, Drawer } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";

const CartDrawer = () => {
	const router = useRouter();
	const { cart } = useContext(CartContext);
	const [open, setOpen] = useState(false);
	const [cartCount, setCartCount] = useState(0);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleCartClick = (e) => {
		e.preventDefault();
		router.push("/checkout");
		handleClose();
	};

	const handleShopClick = (e) => {
		e.preventDefault();
		router.push("/shop");
		handleClose();
	};

	const toggleDrawer = (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		handleOpen();
	};

	useEffect(() => {
		setCartCount(cart.length);
	}, [cart]);

	let total = 0;
	const calculateTotal = () => {
		cart.forEach((item) => {
			let itemPrice = item.stripeData.price_data.unit_amount_decimal;
			let quantity = item.stripeData.quantity;
			total += (itemPrice / 100) * parseFloat(quantity);
		});
		return total.toFixed(2);
	};

	return (
		<>
			<Button
				variant="outlined"
				color="secondary"
				size="large"
				className="font-bold text-lg"
				onClick={handleOpen}
			>
				Cart {cartCount}
			</Button>
			<Drawer open={open} anchor={"right"} onClose={handleClose}>
				<Box
					sx={{ width: 300, overflowY: "auto" }}
					onClick={toggleDrawer}
					onKeyDown={toggleDrawer}
				>
					{cart.length === 0 ? (
						<div className="text-center">
							<div className="m-3 mb-5">
								<div>
									<p className="font-bold text-lg">
										Subtotal
									</p>
									<p className="font-bold text-xl text-red-700">
										${calculateTotal()}
									</p>
								</div>
							</div>
							<hr className="drop-shadow" />
							<div className="my-10 mx-5 text-center">
								<p className="text-4xl font-bold text-neutral-400 my-8">
									Your cart is craving delicious coffee.
								</p>
								<p
									className="text-2xl font-bold border-b-[6px] pb-2 border-red-600 inline hover:cursor-pointer"
									onClick={handleShopClick}
								>
									Shop
								</p>
							</div>
						</div>
					) : (
						<div className="text-center">
							<div className="m-3">
								<div>
									<p className="font-semibold text-lg">
										Subtotal
									</p>
									<p className="font-bold text-xl text-red-700">
										${calculateTotal()}
									</p>
								</div>
								<Button
									variant="outlined"
									color="secondary"
									onClick={handleCartClick}
								>
									Go to Cart
								</Button>
							</div>
							<hr className="drop-shadow" />

							{cart.map((cartItem) => {
								return (
									<CartItem
										key={cartItem.itemId}
										id={cartItem.itemId}
										coffee={cartItem.stripeData}
										isDrawer={true}
									/>
								);
							})}
						</div>
					)}
				</Box>
			</Drawer>
		</>
	);
};

export default CartDrawer;
