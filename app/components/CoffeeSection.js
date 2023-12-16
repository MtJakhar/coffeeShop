"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CoffeeSlider from "./CoffeeSlider";
import { Button } from "@mui/material";

const CoffeeSection = ({
	coffeeData,
	lightRoasts,
	medRoasts,
	darkRoasts,
	brandData,
}) => {
	const router = useRouter();

	const [sliderData, setSliderData] = useState(coffeeData);

	const handleClick = (e) => {
		e.preventDefault();
		router.push(`shop/`);
	};

	const handleRoast = () => {
		setSliderData(coffeeData);
	};

	const handleLightRoast = () => {
		setSliderData(lightRoasts);
	};

	const handleMedRoast = () => {
		setSliderData(medRoasts);
	};

	const handleDarkRoast = () => {
		setSliderData(darkRoasts);
	};

	return (
		<>
			<div>
				<h1>Specialty Coffee from Artisanal Cafes</h1>
				<p
					className="underline hover:cursor-pointer"
					onClick={handleClick}
				>
					Shop All Coffee
				</p>
				<div>
					<Button
						variant="contained"
						className="bg-blue-500 m-2"
						onClick={handleRoast}
					>
						New Arrivals
					</Button>
					<Button
						variant="contained"
						className="bg-blue-500 m-2"
						onClick={handleLightRoast}
					>
						Light Roasts
					</Button>
					<Button
						variant="contained"
						className="bg-blue-500 m-2"
						onClick={handleMedRoast}
					>
						Medium Roasts
					</Button>
					<Button
						variant="contained"
						className="bg-blue-500 m-2"
						onClick={handleDarkRoast}
					>
						Dark Roasts
					</Button>
				</div>
				<CoffeeSlider coffeeData={sliderData} brandData={brandData} />
			</div>
		</>
	);
};

export default CoffeeSection;
