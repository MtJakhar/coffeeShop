import { Button, Box, Modal } from "@mui/material";
import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckOutCard from "./CheckOutCard";

const CartModal = () => {
	const { cart } = useContext(CartContext);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	return (
		<>
			<Button variant="contained" onClick={handleOpen}>
				Cart {cart.length}
			</Button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					{cart.length === 0 ? (
						<div>
							<h1>Please Buy some Coffee!!!</h1>
						</div>
					) : (
						<div>
							<h1>Checkout Items</h1>
							<div>
								{cart.map((cartItem) => {
									return (
										<CheckOutCard />
									)
								})}
							</div>
						</div>
					)}
				</Box>
			</Modal>
		</>
	);
};

export default CartModal;
