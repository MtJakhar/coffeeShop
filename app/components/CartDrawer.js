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
		setOpen(false);
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
									<p className="text-lg">Subtotal</p>
									<p className="font-bold text-xl text-red-700">
										${calculateTotal()}
									</p>
								</div>
							</div>
							<hr className="drop-shadow" />
							<div className="my-10 mx-5 text-center text-2xl font-bold">
								<p>
									Your cart is currently empty. Add more
									products to continue shopping!
								</p>
							</div>
						</div>
					) : (
						<div className="text-center">
							<div className="m-3">
								<div>
									<p className="text-lg">Subtotal</p>
									<p className="font-bold text-xl text-red-700">
										${calculateTotal()}
									</p>
								</div>
								<Button
									variant="outlined"
									color="secondary"
									className="m-2"
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
