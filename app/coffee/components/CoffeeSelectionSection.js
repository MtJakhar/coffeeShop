"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CoffeeSlider from "../../components/CoffeeSlider";

const CoffeeSelectionSection = ({ coffeeData, brandData }) => {
	const router = useRouter();

	const handleShop = (e) => {
		e.preventDefault();
		router.push("/shop");
	};

	return (
		<div className="mx-auto pt-20">
			<div className="flex justify-between text-white text-3xl font-semibold px-14">
				<p>Other {brandData.name} Coffees</p>
				<p
					className="hover:cursor-pointer hover:text-[#dc2626] underline"
					onClick={handleShop}
				>
					View Entire Collection
				</p>
			</div>
			<CoffeeSlider coffeeData={coffeeData} brandData={brandData} />
		</div>
	);
};

export default CoffeeSelectionSection;
