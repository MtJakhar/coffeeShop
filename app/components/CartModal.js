"use client";

import { Button, Box, Modal } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";

const CartModal = () => {
	const router = useRouter();
	const { cart } = useContext(CartContext);
	const [open, setOpen] = useState(false);
	const [cartCount, setCartCount] = useState(0);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleCartClick = (e) => {
		e.preventDefault();
		router.push('/checkout');
		setOpen(false);
	}

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		maxHeight: "80vh", // Set maximum height to 80% of the viewport height
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
		overflowY: "auto", // Enable vertical scrolling
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
			<Button variant="contained" onClick={handleOpen}>
				Cart {cartCount}
			</Button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
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
			</Modal>
		</>
	);
};

export default CartModal;
