import React from "react";
import CoffeeCard from "./CoffeeCard";

const CoffeeSlider = ({ coffeeData, brandData }) => {
	console.log(Array.isArray(brandData));
	return (
		<>
			<div className="flex m-10 overflow-x-auto h-[750px]">
				{coffeeData.map((coffee) => {
					const brand = Array.isArray(brandData)
						? brandData.find(
								(brand) => brand.id === coffee.brand_id
						  )
						: null;
					return (
						<CoffeeCard
							key={coffee.id}
							coffee={coffee}
							brand={brand}
						/>
					);
				})}
			</div>
		</>
	);
};

export default CoffeeSlider;
