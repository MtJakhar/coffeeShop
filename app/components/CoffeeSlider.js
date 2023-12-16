import React from "react";
import CoffeeCard from "./CoffeeCard";

const CoffeeSlider = ({ coffeeData, brandData }) => {
	return (
		<>
			<div className="flex ">
				{coffeeData.map((coffee) => {
					return (
						<CoffeeCard
							key={coffee.id}
							coffee={coffee}
							brand={brandData}
						/>
					);
				})}
			</div>
		</>
	);
};

export default CoffeeSlider;
