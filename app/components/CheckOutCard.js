"use client";

import React, { useState } from "react";

import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import Image from "next/image";
import { IconButton } from "@mui/material";

const CheckOutCard = ({ coffee }) => {
	const [qty, setQty] = useState(coffee.qty);

	const handleLeftClick = () => {
		setQty(qty - 1);
	};
	const handleRightClick = () => {
		setQty(qty + 1);
	};

	return (
		<div>
			<Image
				className="mx-auto"
				src={coffee.image[0]}
				width={200}
				height={200}
				alt="Coffee Image"
			/>
			<h1>{coffeeData.name}</h1>
			<p>${coffee.price}</p>
      
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
