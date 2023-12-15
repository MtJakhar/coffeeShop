"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CoffeeSlider from "./CoffeeSlider";

const CoffeeSection = ({ coffeeData, brandData }) => {
	const router = useRouter();
	const handleClick = (e) => {
		e.preventDefault();
		router.push(`shop/`);
	};

	return (
		<>
			<div>
				<p
					className="underline hover:cursor-pointer"
					onClick={handleClick}
				>
					Shop All Coffee
				</p>
				<CoffeeSlider coffeeData={coffeeData} brandData={brandData} />
			</div>
		</>
	);
};

export default CoffeeSection;
