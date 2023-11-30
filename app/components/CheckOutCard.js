"use client";

import React, { useState } from "react";
import {
	ArrowCircleLeftOutlinedIcon,
	ArrowCircleRightOutlinedIcon,
} from "@mui/icons-material";
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
				width={500}
				height={500}
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
