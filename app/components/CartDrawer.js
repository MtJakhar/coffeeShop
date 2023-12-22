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
						<div>
							<h1>Please Buy some Coffee!!!</h1>
						</div>
					) : (
						<div className="text-center">
							<Button
								variant="contained"
								className="bg-blue-500"
								onClick={handleCartClick}
							>
								Go to Cart
							</Button>
							<h1>Sub Total ${calculateTotal()}</h1>
							{cart.map((cartItem) => {
								return (
									<CartItem
										key={cartItem.itemId}
										id={cartItem.itemId}
										coffee={cartItem.stripeData}
										isModal={true}
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
