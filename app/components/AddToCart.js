"use client";

import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
	Button,
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import axios from "axios";

const AddToCart = ({ coffee }) => {
	const [itemQuant, setItemQuant] = useState(1);
	const { cart } = useContext(CartContext);
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: 200,
			},
		},
	};

	const coffeeData = {
		id: coffee.id,
		name: coffee.name,
		image: coffee.image[1],
		price: coffee.price,
		description: coffee.description,
		quantity: itemQuant,
	};

	const handleChange = (e) => {
		setItemQuant(e.target.value);
	};

	const MenuItems = (number) => {
		let array = [];
		for (let i = 0; i < number; i++) {
			array.push(
				<MenuItem key={i} value={i + 1}>
					{i + 1}
				</MenuItem>
			);
		}
		return array;
	};

	const sendItem = async(e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post("http://localhost:3000/api/checkout", coffeeData);
			const { url } = data
			window.location.href = url
		} catch(error) {
			console.error("Error", error)
		}
	}

	return (
		<div className="flex">
			<Box sx={{ minWidth: 120 }}>
				<FormControl>
					<InputLabel id="demo-simple-select-label">Qty</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={itemQuant}
						label="quantity"
						onChange={handleChange}
						MenuProps={MenuProps}
					>
						{MenuItems(20)}
					</Select>
				</FormControl>
			</Box>
			<Button className="m-2 bg-slate-600" variant="contained" onClick={sendItem}>
				Add to Cart
			</Button>
		</div>
	);
};

export default AddToCart;
