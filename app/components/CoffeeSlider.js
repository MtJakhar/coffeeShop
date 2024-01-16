import React from "react";
import CoffeeCard from "./CoffeeCard";

const CoffeeSlider = ({ coffeeData, brandData }) => {
	return (
		<>
			<div className="flex m-10 overflow-x-auto h-[600px] justify-normal ">
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
